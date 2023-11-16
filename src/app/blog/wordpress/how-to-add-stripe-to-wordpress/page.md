---
title: How to Easily Set Up and Accept Payments with Stripe in WordPress
nextjs:
  metadata:
    title: How to Easily Set Up and Accept Payments with Stripe in WordPress
    description: Learn how to set up and accept payments with Stripe in WordPress effortlessly with our comprehensive guide.
    alternates:
      canonical: https://www.halfnine.com/blog/wordpress/how-to-add-stripe-to-wordpress
---

Streamline your online store's payment processing by integrating Stripe with WordPress. This guide covers various methods for accepting payments with Stripe, from WordPress integration to WPForms, WooCommerce, and Easy Digital Downloads.
<!-- In today's digital world, having an online store without a payment gateway is like having a car without an engine. If you're starting a new store or looking to add a payment method to your existing one, accepting payments seamlessly is crucial. Luckily, WordPress makes it easy to integrate various payment gateways, and one of the most popular choices is Stripe.

In this comprehensive guide, we will walk you through the step-by-step process of setting up and accepting payments with Stripe in WordPress. We will cover different methods, including integrating Stripe with WordPress itself, WPForms, WooCommerce, and Easy Digital Downloads (EDD). So, whether you're selling physical products, digital downloads, or services, this guide has got you covered. -->

---

{% blog-hero image="/img/blog/how-to-add-stripe-to-wordpress.png" imagedescription="Stripe Payments with WordPress" /%}

## What is a Payment Gateway and How Does It Work?

Before we dive into setting up Stripe in WordPress, let's first understand what a payment gateway is and how it works. A payment gateway is an application integrated into your online store that enables secure payments. It acts as the middleman between you and your customers, facilitating the transaction process.

Here's a simplified overview of how a payment gateway works:

1. The customer places an order and proceeds to checkout.
2. The customer is redirected to a payment gateway where they select their preferred payment method and enter relevant information.
3. The payment gateway directs the customer to the issuing bank or a 3D Secure page for additional verification.
4. On successful authorization, the bank verifies the transaction details and completes the transaction.
5. The payment gateway sends a message back to the merchant with the transaction status.
6. The bank settles the amount with the payment gateway, which then settles with the merchant.

It's important to note that all payment gateways require your website to use SSL/HTTPS encryption for security purposes. Most hosting service providers offer free SSL certification, so make sure to enable it before setting up a payment gateway.

## PayPal vs Stripe: An Overview

When it comes to payment gateways, two of the most commonly used options are PayPal and Stripe. Both PayPal and Stripe offer seamless integration with WordPress and provide a range of features and flexibility. Let's take a quick look at the key differences between them:

| Service | PayPal Standard | Stripe |
| --- | --- | --- |
| Fee per Transaction* | 2.9% + fixed fee | 2.9% + fixed fee |
| Setup Costs or Monthly Fees | Nil | Nil |
| Contract Required | Nil | Nil |
| Micropayments (<$10) | 5.00% + micropayments fixed fee | 5.00% + micropayments fixed fee |
| Recurring Billing | No | Yes |
| Chargeback Fee | $20 | $15 |
| Refunds | Partial or full refunds with no fees, but the fees from the original charge are not returned. | Partial or full refunds with no fees, but the fees from the original charge are not returned. |
| Customer Support | Email, Help Centre, Phone & Chat | Email, Help Centre, 24/7 Phone & Chat |
| Ease of Setup | Easy | Moderate |
| PCI Compliance | Yes | Yes |
| Access to Funds | Immediate | 2 Days (Average) |
| Countries Available | 200+ | 30+ |

Please note that the fees and availability may vary depending on your location. Visit the respective PayPal and Stripe websites for detailed information on charges and fees applicable to your region.

Based on your specific requirements, you can choose either PayPal or Stripe as your payment gateway. In this guide, we will focus on setting up Stripe in WordPress, but keep in mind that PayPal integration with WooCommerce is equally straightforward and hassle-free.

## How to Accept Payments in WordPress

Now that we have a clear understanding of payment gateways and the differences between PayPal and Stripe, let's explore how to set up and accept payments in WordPress. We will cover four different methods: Stripe with WordPress, Stripe with WPForms, Stripe in WooCommerce, and Stripe in Easy Digital Downloads (EDD).

## Stripe With WordPress

If you're looking to sell just one product or service at a fixed price, integrating Stripe directly with WordPress is an ideal choice. This method is perfect for freelancers, consultants, or anyone selling digital products like eBooks.

Here's a step-by-step guide on setting up Stripe with WordPress:

### Step 1: Install the Stripe Plugin

The first step is to install and activate the 'Stripe Payments WordPress Plugin - WP Simple Pay.' This plugin allows you to integrate Stripe with WordPress seamlessly. It comes with both a free and a paid version, offering various features to enhance your payment process.

To install the plugin, follow these steps:

1. Go to your WordPress dashboard.
2. Navigate to 'Plugins' > 'Add New.'
3. Search for 'Stripe Payments WordPress Plugin - WP Simple Pay.'
4. Click 'Install Now' and then 'Activate.'

Once activated, you'll see a 'Test Mode' notification on the top right-hand corner of your WordPress dashboard. This indicates that the plugin is ready for setup.

### Step 2: Setting up a Stripe Account

To connect your WordPress site with Stripe, you need to set up a Stripe account. Follow these steps to get started:

1. Go to 'Simple Pay Lite' > 'Settings.'
2. In the 'Settings' page, you'll find the 'Test Mode' option set to 'Enabled.' Change it to 'Disabled' when you want to start accepting payments or take your site live.
3. Navigate to the 'Stripe Setup' tab and click on the 'Connect with Stripe' button.
4. If you already have a Stripe account, click 'Sign in' at the top right of the page. If you don't have an account, fill in the form and activate your account.
5. Once your account is activated, the email address used during registration will be displayed as the 'Administrator (Owner).' Your Stripe account is now connected to your WordPress site.

### Step 3: Creating a Payment Form

The next step is to create a payment form using the WP Simple Pay plugin. This form will be used to collect payment details from your customers. Follow these steps to create a payment form:

1. Go to 'Simple Pay Lite' > 'Payment Forms.'
2. Click on 'Add New' to create a new payment form.
3. Give your payment form a title. This title is for your reference and won't be displayed on the front end of your site.
4. Fill in the details for the remaining tabs, such as 'Payment Options,' 'On-Site Form Display,' and 'Stripe Checkout Display.'
5. Under the 'Stripe Setup' tab, click on 'Publish' to save your payment form.

After publishing, you'll find your payment form listed under 'Simple Pay Lite' > 'Payment Forms.' Copy the shortcode associated with the form, as we'll need it in the next step.

### Step 4: Integrating a Stripe Payment Form in Your Page

Now that you have set up Stripe and created a payment form, it's time to integrate the form into a page on your WordPress site. Follow these steps:

1. Go to 'Pages' > 'Add New' to create a new page.
2. Give your page a name, such as 'My eBook Page.'
3. Add a shortcode widget to your page.
4. Paste the shortcode you copied from the payment form into the shortcode widget.
5. Publish your page.

Congratulations! You have successfully set up Stripe with WordPress. Your checkout page is now ready, and customers can make payments using Stripe.

## Stripe With WPForms

Another popular method of accepting payments in WordPress is by using forms. WPForms is a powerful form plugin that allows you to create various types of forms, including contact forms, booking forms, and even forms with payment options.

To set up Stripe with WPForms, follow these steps:

### Step 1: Install the WPForms Plugin

First, you need to install and activate the WPForms plugin. WPForms is a highly rated form builder plugin with millions of installations.

To install the plugin, follow these steps:

1. Go to your WordPress dashboard.
2. Navigate to 'Plugins' > 'Add New.'
3. Search for 'WPForms.'
4. Click 'Install Now' and then 'Activate.'

Once activated, you'll see a new 'Payments' tab in the WPForms settings.

### Step 2: Setting up Stripe

To integrate Stripe with WPForms, you'll need the Pro version of the plugin. If you haven't already, upgrade to the Pro version by visiting the WPForms website.

Follow these steps to set up Stripe with WPForms:

1. Go to 'WPForms' > 'Addons' in your WordPress dashboard.
2. Click on the 'Install Addon' button under 'Stripe Addon.'
3. Once the Stripe addon is activated, go to 'WPForms' > 'Settings.'
4. Enter the license key you obtained after upgrading to the Pro version and click on 'Connect.'

With Stripe successfully set up, you can now create forms with payment options.

### Step 3: Creating the Form

To create a form with Stripe payment options, follow these steps:

1. Go to 'WPForms' > 'Add New' in your WordPress dashboard.
2. Choose a pre-made template or create a form from scratch.
3. On the form builder page, select 'Stripe' under the 'Payment Fields' section.
4. Enable the 'Enable Stripe payments' option.
5. Customize the form fields and settings according to your requirements.
6. Save the form.

### Step 4: Including the Form in a Page

The final step is to include the form on a page of your WordPress site. Follow these steps:

1. Create a new page or edit an existing one.
2. Add a 'WPForms' widget to the page.
3. Select the form you created from the widget options.
4. Publish the page.

Your form with Stripe payment options is now ready. Visitors can fill out the form and make payments using Stripe.

## Stripe in WooCommerce

If you're running an eCommerce store with WordPress, integrating Stripe with WooCommerce is a popular choice. WooCommerce is a leading eCommerce plugin that allows you to sell physical and digital products seamlessly.

Here's how you can set up Stripe in WooCommerce:

### Step 1: Install the WooCommerce Stripe Payment Gateway Plugin

To enable Stripe payments in WooCommerce, you'll need to install the 'WooCommerce Stripe Payment Gateway' plugin. This plugin allows your WooCommerce store to accept payments through Stripe, including popular credit cards and digital wallet services like Apple Pay and Google Pay.

To install the plugin, follow these steps:

1. Go to your WordPress dashboard.
2. Navigate to 'Plugins' > 'Add New.'
3. Search for 'WooCommerce Stripe Payment Gateway.'
4. Click 'Install Now' and then 'Activate.'

Once activated, you'll find the Stripe payment gateway options in the WooCommerce settings.

### Step 2: Setting up Stripe for WooCommerce

Now that you have the Stripe payment gateway plugin installed, it's time to set it up for your WooCommerce store. Follow these steps:

1. Go to 'WooCommerce' > 'Settings' in your WordPress dashboard.
2. Click on the 'Payments' tab.
3. You'll see a list of default payment methods available in WooCommerce.
4. Find the 'Stripe - Credit Card (Stripe)' option and click on 'Set up.'

You'll be redirected to the Stripe settings page. Here, you'll need to enter your Stripe account details, including the publishable key and secret key. You can find these details in your Stripe account settings.

Fill in the required fields and configure other options according to your preferences. Once you've completed the settings, click 'Save Changes.'

Congratulations! You have successfully set up Stripe with WooCommerce. Customers can now make payments using Stripe on your WooCommerce store.

## Stripe in Easy Digital Downloads (EDD)

If you're selling digital products or downloads, Easy Digital Downloads (EDD) is a popular WordPress plugin to consider. With EDD, you can easily sell eBooks, PDF files, WordPress plugins, and other digital items.

To integrate Stripe with Easy Digital Downloads, follow these steps:

### Step 1: Install the Easy Digital Downloads Stripe Payment Gateway Plugin

To enable Stripe payments in Easy Digital Downloads, you'll need the premium version of the plugin. You can purchase and download the 'Stripe Payment Gateway' plugin from the Easy Digital Downloads website.

Once you have the premium version, follow these steps:

1. Go to 'Downloads' > 'Settings' in your WordPress dashboard.
2. Click on the 'Payment Gateways' tab.
3. Find the 'Stripe' option and click on it.
4. Enter the required details, such as publishable key and secret key, which you can obtain from your Stripe account settings.
5. Click 'Save Changes' to apply the settings.

With Stripe successfully integrated into Easy Digital Downloads, your checkout pages will be able to accept credit card payments through Stripe.

## Conclusion

Setting up and accepting payments with Stripe in WordPress is a straightforward process that doesn't require extensive technical knowledge. Whether you choose to integrate Stripe directly with WordPress, WPForms, WooCommerce, or Easy Digital Downloads, you can provide your customers with a seamless payment experience.

In this guide, we covered the step-by-step process for each method, from installing the necessary plugins to configuring the settings. Now, it's time for you to choose the method that best suits your needs and start accepting payments with Stripe in WordPress.

Remember, integrating a reliable and secure payment gateway like Stripe not only enhances the user experience but also boosts your credibility as an online business. So, go ahead and implement Stripe in your WordPress site to streamline your payment process and maximize your revenue potential.