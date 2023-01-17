const AccountService = require("../account/account.service");
const TransactionsService = require("./transaction.service");

module.exports = {
  AddTransaction: async (Sender, Reciver, balance, transactionDate) => {
    await TransactionsService.create({
      Sender,
      Reciver,
      balance,
      transactionDate
    });
  },
  Transfer: async (req, res) => {
    const { Sender, Reciver, balance, transactionDate } = req.body;
    if (Object.values(req.body).some((v) => !v)) {
      return res.sendStatus(400, {
        message: "Veuillez remplir tous les champs obligatoires"
      });
    }
    let accountSender = await AccountService.findById(Sender);
    let accountReciver = await AccountService.findById(Reciver);
    if (accountSender.balance >= balance) {
      const sent = await AccountService.findByIdAndUpdate(Sender, {
        $set: { balance: accountSender.balance - balance }
      });
      const recived = await Account.findByIdAndUpdate(Reciver, {
        $set: { balance: accountReciver.balance + balance }
      });
      if (sent && recived) {
        AddTransaction(Sender, Reciver, balance, transactionDate);
        res.json({ message: "done" });
      }
    } else {
      throw new Error(
        `l'opération a échoué, le maximum que vous pouvez tranfere est :${accountSender.balance} DH`
      );
    }
  }
};
