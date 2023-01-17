const AccountService = require("./account.service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");

module.exports = {
  CreateAcc: async (req, res) => {
    const { user, password, type } = req.body;
    const reference = Math.random().toString().slice(2, 11);
    //   check for values of each feild
    if (Object.values(req.body).some((v) => !v)) {
      return res.sendStatus(400, {
        message: "Veuillez remplir tous les champs obligatoires"
      });
    }
    const AccExist = await AccountService.findOne({ user: user });
    if (AccExist) {
      res.status(400);
      throw new Error("Vous avez deja cree un compte");
    }
    const salt = genSaltSync(10);
    const hashPassword = hashSync(password, salt);

    const account = await AccountService.create({
      user,
      reference,
      password: hashPassword,
      type
    });
    account
      ? res.json({ message: "Compte créé avec succès", ref: reference })
      : res.status(400);
    throw new Error("les données ne sont pas valides");
  },

  SignToAcc: async (req, res) => {
    const { reference, password } = req.body;
    const myAcc = await AccountService.list({ reference });
    if (myAcc && (await compareSync(password, myAcc.password))) {
      res.json({
        id: myAcc.id,
        user: myAcc.user,
        type: myAcc.type,
        balance: myAcc.balance,
        transactions_Sent: myAcc.transactions_Sent,
        transactions_Recived: myAcc.transactions_Recived
      });
    } else {
      res.status(400);
      throw new Error("informations non valables");
    }
  },

  PullMoney: async (req, res) => {
    const { id_acc, balance_pulled, operationDate } = req.body;
    const account = await AccountService.findById(id_acc);
    if (!account) {
      res.status(400);
      throw new Error("Compte non trouve");
    }
    if (account.balance >= balance_pulled) {
      const newOperation = await AccountService.findByIdAndUpdate(id_acc, {
        $set: { balance: account.balance - balance_pulled }
      });
      if (newOperation) {
        res.json({ message: "opération effectuée avec succès" });
        addOperation(id_acc, "retrait", balance_pulled, operationDate);
      }
    } else {
      res.status(400);
      throw new Error(
        `l'opération a échoué, le maximum que vous pouvez tirer est :${account.balance} DH`
      );
    }
  },

  addOperation: async (id_acc, operationType, balance, operationDate) => {
    const history = {
      operationType,
      balance,
      operationDate
    };
    const operation = await AccountService.findByIdAndUpdate(id_acc, {
      $push: { history: history }
    });
    if (!operation) {
      throw new Error("error");
    }
  },

  GetAllAccounts: async (req, res) => {
    const Accounts = await AccountService.find();
    if (!Accounts) {
      throw new Error("no data available");
    }
    res.json({
      message: "success",
      data: Accounts
    });
  },

  GetMyAccount: async (req, res) => {
    const { id } = req.body;
    const account = await AccountService.findOne({ user: id });
    if (!account) {
      res.json({
        message: `Vous n'avez pas encore créé votre compte`,
        status: false
      });
    } else {
      res.json({
        status: true,
        ref: account.reference,
        type: account.type,
        balance: account.balance,
        history: account.history
      });
    }
  },

  
};
