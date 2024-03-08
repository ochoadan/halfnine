---
title: How to Check if Firewall is Blocking a Port
nextjs:
  metadata:
    title: How to Check if Firewall is Blocking a Port - Halfnine
    description: Ensure your network security by finding out if your firewall is blocking a port with our step-by-step instructions.
    alternates:
      canonical: https://www.halfnine.com/blog/cybersecurity/how-to-check-if-firewall-is-blocking-a-port
---

Firewalls play a crucial role in protecting your computer system from unauthorized access and potential security threats. However, there are instances where firewalls may inadvertently block ports or programs, causing connectivity issues. In this article, we will explore different methods to check if your firewall is blocking a port and how to resolve the issue.

---

{% blog-hero image="/img/blog/how-to-check-if-firewall-is-blocking-a-port.png" imagedescription="Firewall and Port Checking" /%}

---

## Understanding Firewall Blocking

Before we dive into the methods to check if your firewall is blocking a port, let's briefly understand how firewalls work. A firewall acts as a barrier between your computer and the external network, monitoring incoming and outgoing network traffic. It uses predefined rules to allow or block specific types of traffic based on various criteria such as port numbers, IP addresses, and protocols.

When a firewall blocks a port, it prevents any incoming or outgoing traffic through that port. This can lead to connectivity problems, especially for applications or services that rely on specific ports to function properly. Checking if a firewall is blocking a port is crucial to identify and resolve such issues.

---

## Method 1: Using Command Prompt

One of the ways to check if your firewall is blocking a port is by using the Command Prompt utility. Here's how you can do it:

1. Press the **Windows Key** and type **cmd** in the search bar.
2. Right-click on **Command Prompt** and select **Run as Administrator**.
3. In the Command Prompt window, type the following command and hit enter:

```bash
netsh firewall show state
```

1. This command will display a list of both blocked and active ports configured in the firewall.

By examining the output, you can easily identify if the port you are concerned about is listed as blocked. If it is, you will need to take further steps to unblock it.

---

## Method 2: Checking Firewall Settings

Another method to check if your firewall is blocking a port is by reviewing the firewall settings. Here's how you can do it:

1. Press the **Windows Key** + **R** to open the Run dialog box.
2. Type **control** and press **OK** to open the Control Panel.
3. Click on **System and Security**.
4. Under the **Windows Defender Firewall** section, click on **Windows Defender Firewall**.
5. From the left panel, click on **Allow an app or feature through Windows Defender Firewall**.
6. In the **Allowed apps** window, scroll through the list of apps and locate the one you want to review.
7. Check if the app is checked or unchecked. If it is unchecked, it means that the app is blocked on the firewall.

If you find that the app is blocked, simply check the app and click **OK** to allow it through the firewall.

---

## Method 3: Analyzing Firewall Logs

Firewall logs can provide valuable information about blocked ports and network activity. Here's how you can analyze firewall logs to check if a port is blocked:

1. Open the **Windows Firewall with Advanced Security** by following the steps mentioned in Method 2.
2. Click on **Actions** and select **Properties**.
3. Choose your preferred **Profile** (Domain, Private, Public).
4. In the **Logging** section, click on the **Customize** button.
5. Set the **Log dropped packets** option to **Yes**.
6. Take note of the **pfirewall.log** path in the **Name** section.
7. Click **OK** to save the changes.

Once you have enabled logging, you can open File Explorer (Windows Explorer) and navigate to the path where the log file is saved. Typically, the log file is located at `%systemroot%\system32\LogFiles\Firewall`. Look for any blocked ports in the log file.

---

## Method 4: Port Scanning

Port scanning can help determine if a port is open or blocked by the firewall. While there are various tools available for port scanning, we will focus on the Microsoft command line utility, [PortQry](https://www.microsoft.com/en-us/download/details.aspx?id=17148).

PortQry can be used to test specific ports or scan all open ports on a machine. Here's how you can use PortQry to check if a port is blocked:

1. Open the Command Prompt as an administrator.
2. To test all open ports, use the following command:

```bash
portqry.exe -n #.#.#.#
```

Replace `#.#.#.#` with the IP address you want to test.

1. To test a specific port, use the following command:

```bash
portqry.exe -n #.#.#.# -e #
```

Replace `#.#.#.#` with the IP address and `#` with the port number you want to test.

The output will indicate whether the port is listening, filtered, or not listening. If the port is filtered, it suggests that a firewall or software issue may be blocking the port.

---

## Method 5: Using Telnet

Telnet is another command line option that can help determine if a port is responding to network requests. Here's how you can use telnet to check if a port is blocked:

1. Open the Command Prompt.
2. Enter the following command:

```bash
telnet localhost <port>
```

Replace `<port>` with the port number you want to test.

1. If the port is open and responsive, you will see a connection established message. Otherwise, if the port is blocked, you will receive an error message or no response.

Telnet can provide a quick indication of whether a specific port on the local machine is responding or blocked.

---

## Checking External Firewalls

It's important to note that if you suspect an external firewall is blocking a port, you will need to investigate that specific firewall's settings. The methods mentioned above primarily focus on checking the Windows Firewall. For external firewalls, you may need to consult the firewall documentation or contact the network administrator for further assistance.

---

## Conclusion

In conclusion, checking if a firewall is blocking a port is essential for troubleshooting connectivity issues. By using methods such as command prompt, analyzing firewall settings and logs, port scanning, and telnet, you can identify and resolve port blocking problems effectively. Remember to consult the appropriate firewall documentation or seek assistance from network administrators when dealing with external firewalls. Ensuring that the necessary ports are open and accessible will enable smooth communication between your applications and the network.