---
title: How to Install Node.js on Linux - A Guide for Developers
nextjs:
  metadata:
    title: How to Install Node.js on Linux - A Guide for Developers - Halfnine
    description: Master the installation of Node.js on Linux through our detailed guide designed for developers.
    alternates:
      canonical: https://www.halfnine.com/blog/linux/how-to-install-node-js-linux
---

Node.js is a powerful JavaScript runtime that allows developers to build scalable and efficient applications. If you're a web developer working on the frontend or backend, having Node.js installed on your Linux system is essential. In this comprehensive guide, we will walk you through the step-by-step process of installing Node.js on your Linux operating system. Whether you're using Linux as your main operating system, in a virtual machine, or as a secondary operating system on dual boot, this guide will work for you.

---

{% blog-hero image="/img/blog/how-to-install-node-js-linux.png" imagedescription="Node JS on Linux Guide" /%}

---

<!-- ## Why Install Node.js on Linux?

Before we dive into the installation process, let's understand why installing Node.js on Linux is crucial for developers. Node.js is not only a runtime environment but also a game-changer in the world of JavaScript development. It allows developers to use JavaScript for both frontend and backend development, making it a full-stack language. Before Node.js, JavaScript developers had to learn a separate language for backend tasks, which was a hassle. With Node.js, developers can leverage their existing JavaScript skills and build applications more efficiently.

Additionally, Node.js has gained popularity among top companies and organizations such as NASA, Twitter, Netflix, LinkedIn, PayPal, GitHub, eBay, Walmart, Spotify, and Medium. These companies rely on Node.js to power their websites and API services, showcasing its versatility and scalability. By installing Node.js on your Linux system, you can join the ranks of successful developers and take advantage of its extensive capabilities.

--- -->

## Prerequisites for Installing Node.js on Linux

Before we begin the installation process, let's ensure that we have all the necessary prerequisites. Here's what you need:

### Hardware Requirements

- A stable hard drive
- Minimum 4GB of RAM
- At least 256GB of hard disk space

### Software Requirements

- Linux operating system
- A web browser (Google Chrome, Mozilla Firefox, or Microsoft Edge)
- A non-root Sudo user with Linux server installed
- Firewall enabled for security

Now that we have the prerequisites covered, let's move on to the installation process.

---

## Method 1: Installing Node.js from Linux's Official Repository

Linux's official repository provides a straightforward way to install Node.js on your Linux system. Follow these steps:

**Step 1: Update the Package Manager** Open your terminal and enter the following command to update the package manager:

```bash
sudo apt update
```

Enter your password when prompted.

**Step 2: Install Node.js** Once the package manager is updated, use the following command to install Node.js:

```bash
sudo apt install nodejs
```

This command will install the latest stable version of Node.js available in the official Linux repository.

**Step 3: Install npm** npm (Node Package Manager) is bundled with Node.js. To verify the installation and check the npm version, use the following command:

```bash
npm -v
```

Congratulations! You have successfully installed Node.js on your Linux system using Linux's official repository. Now you can start building powerful applications with JavaScript.

---

## Method 2: Installing Node.js using the NodeSource Repository

If you want to install the latest version of Node.js, you can use the NodeSource repository. Here's how:

**Step 1: Update the Package Manager** Open your terminal and enter the following commands to update and upgrade the package manager:

```bash
sudo apt-get update
sudo apt-get upgrade
```

**Step 2: Install Required Dependencies** Before installing Node.js from the NodeSource repository, you need to install the required dependencies. Use the following command:

```bash
sudo apt-get install python-software-properties
```

**Step 3: Add the NodeSource Repository** To add the NodeSource repository, use the following command:

```bash
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
```

This command adds the Node.js 14.x repository to your Linux system.

**Step 4: Install Node.js and npm** Once the repository is added, you can install Node.js and npm using the following command:

```bash
sudo apt-get install nodejs
```

To verify the installation and check the Node.js and npm versions, use the following commands:

```bash
node -v
npm -v
```

Congratulations! You have successfully installed the latest version of Node.js on your Linux system using the NodeSource repository.

---

## Method 3: Installing Node.js using Node Version Manager (NVM)

Node Version Manager (NVM) allows you to manage multiple versions of Node.js on your system. Here's how you can use NVM to install Node.js:

**Step 1: Install NVM** Open your terminal and enter the following command to install NVM:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

This command downloads and installs NVM on your Linux system.

**Step 2: Activate NVM** To activate NVM, use the following command:

```bash
source ~/.bashrc
```

This command activates NVM and makes it available in your terminal.

**Step 3: Install Node.js** Once NVM is activated, you can install the desired version of Node.js using the following command:

```bash
nvm install node
```

This command installs the latest stable version of Node.js.

**Step 4: Set Default Node.js Version** To set the default Node.js version, use the following command:

```bash
nvm alias default node
```

This command sets the installed Node.js version as the default.

Congratulations! You have successfully installed Node.js using Node Version Manager (NVM) on your Linux system.

---

## Verifying the Installation

To verify that Node.js and npm are installed correctly on your Linux system, use the following commands:

**Node.js Version:**

```bash
node -v
```

**npm Version:**

```bash
npm -v
```

If the installed versions are displayed without any errors, it means that Node.js and npm are installed successfully.

---

## Creating a Hello World Web Server with Node.js on Linux

Now that you have Node.js installed on your Linux system, let's create a simple "Hello World" web server using Node.js. Follow these steps:

**Step 1: Create a Directory** Open your terminal and navigate to the directory where you want to create your project. Use the following command to create a new directory:

```bash
mkdir my-node-project
```

**Step 2: Navigate to the Directory** Navigate to the newly created directory using the following command:

```bash
cd my-node-project
```

**Step 3: Initialize the Project** Initialize the Node.js project by running the following command:

```bash
npm init -y
```

This command creates a `package.json` file, which contains metadata and dependencies for your project.

**Step 4: Create the Server File** Use a text editor of your choice to create a new file called `server.js` inside the project directory. Add the following code to the file:

```bash
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});
```

**Step 5: Start the Server** To start the server, run the following command in your terminal:

```bash
node server.js
```

Congratulations! You have created a simple web server using Node.js on your Linux system. You can now access your server by visiting `http://localhost:3000/` in your web browser.

---

## Uninstalling Node.js from Linux

If you ever need to uninstall Node.js from your Linux system, follow these steps:

**Step 1: Uninstall Node.js** Open your terminal and run the following command to uninstall Node.js:

```bash
sudo apt-get remove nodejs
```

**Step 2: Uninstall npm** To uninstall npm, run the following command:

```bash
sudo apt-get remove npm
```

Congratulations! You have successfully uninstalled Node.js and npm from your Linux system.

---

## Conclusion

In this comprehensive guide, we have explored three methods to install Node.js on Linux: using Linux's official repository, using the NodeSource repository, and using Node Version Manager (NVM). Each method offers its own advantages and allows you to install different versions of Node.js based on your requirements. Additionally, we have learned how to create a simple web server using Node.js on Linux and how to uninstall Node.js if needed.

Now that you have Node.js installed on your Linux system, you can leverage its power and build innovative, scalable applications. Happy coding!

**Additional Information:**

- Node.js LTS (Long-Term Support) versions provide stability and long-term maintenance for production environments.
- Always check the official Node.js website or documentation for the latest LTS version and installation instructions.
- Keep npm (Node Package Manager) updated by running `npm install -g npm` periodically.
- Explore the vast ecosystem of Node.js packages and frameworks to enhance your development experience.