---
date: 2023-05-15 02:10:00 +0530
title: "Banking App"
slug: banking-app
tech: ["C#", "Xunit", "Interpreted Pattern Design"]
web: https://github.com/AmirAliuA/banking-app
icon: /images/work/index/banking-app/c-sharp-logo.png
active: false
tagline: Simple banking application that follows the Interpreter Pattern
---

![Pika Screenshot](/images/work/index/banking-app/console-banking-app.png)

This C# program is a simple banking application that follows the Interpreter Pattern. Let's break down the key components and their functionalities:

---

1. Interpreter Pattern is a behavioral design pattern that defines a grammar for a language and provides an interpreter to interpret sentences in that language.

2. Expression.cs - Defines the Expression interface, which declares the Interpret method. This method will be implemented by concrete expression classes to perform operations on a bank account.

3. CheckBalanceExpression.cs - Implements the Expression interface. It interprets and displays the account balance on the console.

4. Context.cs - Represents the context in which an interpretation operation is performed. It holds an instance of the Account class.

5. DepositExpression.cs - Implements the Expression interface. It interprets and performs a deposit operation on the provided account, updating the balance.

6. WithdrawExpression.cs - Implements the Expression interface. It interprets and performs a withdrawal operation on the provided account, considering the balance and displaying appropriate messages.

7. Account.cs (Models) - Represents a bank account with a balance.

8. Program.cs - The main entry point for the banking application. It creates an account, a context for that account, and provides a simple console-based user interface to interact with the banking operations.

---

**Key User Interactions:**
1. Check Balance (Option 1): Displays the account balance.
2. Withdraw (Option 2): Allows the user to input an amount and withdraw funds if sufficient balance is available.
3. Deposit (Option 3): Allows the user to input an amount and deposit funds.
4. Exit (Option 4): Terminates the program.
 
---

**How to Run:**
1. The program starts by creating an account and a context.
2. It enters a loop where the user can choose options (1-4) to perform different banking operations.
3. Depending on the option chosen, the program interacts with the corresponding expression classes to interpret and execute the requested operation on the account.

---

**Example Flow:**
1. User chooses option 1: Check Balance.
2. The CheckBalanceExpression is instantiated, and its Interpret method is called to display the account balance.