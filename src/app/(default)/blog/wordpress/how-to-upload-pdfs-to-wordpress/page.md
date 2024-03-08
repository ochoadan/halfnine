---
title: How to Upload and Display PDFs on WordPress
nextjs:
  metadata:
    title: How to Upload and Display PDFs on WordPress - Halfnine
    description: Learn how to upload and display PDFs on your WordPress website with our step-by-step guide.
    alternates:
      canonical: https://www.halfnine.com/blog/wordpress/how-to-upload-pdfs-to-wordpress
---

Whether it's an e-book, a whitepaper, or a brochure, PDFs provide a convenient and professional way to distribute content. If you're using WordPress as your content management system, you might be wondering how to upload and display PDFs on your website. In this comprehensive guide, we'll walk you through the step-by-step process of adding PDFs to your WordPress site and displaying them in a searchable library.

---

{% blog-hero image="/img/blog/how-to-upload-pdfs-to-wordpress.png" imagedescription="changeme" /%}

---

## Why Upload PDFs to WordPress?

Before we dive into the technicalities of uploading PDFs to WordPress, let's first understand why it's beneficial to do so. PDFs are a universal file format that can be viewed on any device without compromising the formatting or layout. This makes them an ideal choice for sharing documents with your website visitors. By uploading PDFs to your WordPress site, you can provide valuable resources, such as reports, guides, or case studies, that your audience can easily download and access at their convenience.

---

## Storing PDFs: WordPress Media Library or External Hosting?

When it comes to storing your PDF files, you have two options: using the WordPress Media Library or hosting them externally. Let's take a closer look at each option:

1. **WordPress Media Library**: By default, WordPress offers a built-in Media Library where you can upload and store various types of media files, including PDFs. This option keeps all your files within your WordPress installation, making it easy to manage and organize your documents.
2. **External Hosting**: Alternatively, you can choose to host your PDFs on third-party file hosting servers like [Dropbox](https://www.dropbox.com/), [Google Drive](https://www.google.com/drive/), or [Amazon S3](https://aws.amazon.com/s3/). This option is useful if you already have your PDFs hosted elsewhere or if you have limited storage space on your web hosting account.

Both options have their own merits, and the instructions in this guide can be applied to either storage method. However, it's worth noting that if you choose to host your PDFs externally, your users won't be able to preview them in a lightbox or PDF viewer. Instead, they will need to download the PDFs to view them.

---

## Step 1: Uploading PDFs to WordPress Media Library

If you decide to store your PDFs in the WordPress Media Library, here's how you can upload them:

1. Log in to your WordPress admin dashboard and navigate to the **Media** section in the sidebar.
2. Click on the **Add New** button to open the media uploader.
3. You can either drag and drop your PDF files into the designated area or click the **Select Files** button to choose files from your computer.
4. Once the upload is complete, you will see your PDF files listed in the Media Library.

---

## Step 2: Embedding PDFs in Pages or Posts

Now that your PDFs are uploaded to the Media Library, you can embed them in pages or posts on your WordPress site. Follow these steps:

1. Go to the page or post editor where you want to add the PDF link.
2. Position your cursor where you want the PDF link to appear and click the **Add Block** button. Search for and select the **File** block.
3. In the File block settings, you have two options: **Upload** or **Media Library**. If you choose Upload, you can select the PDF file from your computer. If you choose Media Library, you can select the PDF file from the files you've uploaded earlier.
4. Once you've added the PDF file, you can customize its appearance and behavior using the options available in the sidebar. For example, you can choose to show the PDF inline, set the height of the embed, and configure whether the PDF should open in a new tab.
5. Save or publish your page or post, and the PDF will be embedded and accessible to your visitors.

---

## Step 3: Linking to PDFs on WordPress

If you prefer to create a text link or a button that links to your PDF instead of embedding it, here's how you can do it:

1. Go to the Media Library and locate the PDF file you want to link to.
2. Click on the PDF file to open its details.
3. On the right side, you'll find the **File URL**. This is the URL you can use to link to the PDF anywhere on your WordPress site.
4. To create a text link or button, go to the page or post editor and select the text or insert the button where you want the link to appear.
5. Click the **Insert/Edit Link** button in the editor toolbar and paste the PDF's URL into the link field.
6. Customize the link text or button as desired, and save or publish your page or post.

---

## Managing PDFs with Document Library Pro Plugin

While WordPress provides basic functionality for uploading and displaying PDFs, it may not be the most efficient solution for sites that require a large number of PDFs. In such cases, using a plugin like [Document Library Pro](https://barn2.com/wordpress-plugins/document-library-pro/) can greatly enhance your PDF management capabilities. With Document Library Pro, you can:

- Upload PDFs individually, in bulk, or via CSV import.
- Create a searchable and filterable PDF library for your website visitors.
- Organize PDFs into categories and tags for easy management.
- Enable version control for your PDFs.
- Store PDF files in the WordPress Media Library or on external servers like Dropbox or Google Drive.

To install and set up Document Library Pro:

1. Purchase and download the plugin from the [official website](https://barn2.com/wordpress-plugins/document-library-pro/).
2. In your WordPress admin dashboard, go to **Plugins** > **Add New** > **Upload Plugin**. Upload the plugin's .zip file and activate it.
3. Follow the plugin's setup wizard to activate your license key and configure the main settings for displaying your PDFs. Choose the layout, enable folders, select columns, and customize link styles.
4. Once the plugin is set up, you can start uploading PDFs to your WordPress PDF library using the various methods provided by Document Library Pro.

---

## Uploading PDFs with Document Library Pro

[Document Library Pro](https://barn2.com/wordpress-plugins/document-library-pro/) offers several ways to upload PDFs to your WordPress site. Here are the different methods available:

1. **Individual Upload**: Upload PDFs one by one, either by selecting files from your computer or by providing a URL to an externally hosted PDF.
2. **Media Library Selection**: Choose PDFs from your WordPress Media Library and import them into your PDF library.
3. **Drag and Drop**: Drag and drop multiple PDF files directly onto the import page to upload them all at once.
4. **Bulk CSV Upload**: Create a CSV file containing the details of your PDFs, including URLs, categories, tags, and more. Then, import the CSV file to upload the PDFs in bulk.
5. **Front End Upload Form**: Allow users to upload PDFs directly from the front end of your website using a dedicated upload form.

By using Document Library Pro, you can efficiently manage and organize your PDF library, making it easier for your visitors to find and access the documents they need.

---

## Displaying PDFs on the Front End

Once you have uploaded your PDFs with Document Library Pro, you can display them on the front end of your WordPress site. Document Library Pro provides two main options for displaying PDFs:

1. **Document Library Page**: Document Library Pro automatically creates a main document library page that lists all the PDFs in your library. You can customize this page's layout and design to suit your website's branding.
2. **Shortcodes**: Document Library Pro offers various shortcodes that allow you to display specific PDFs or groups of PDFs on any page or post. You can customize the appearance and behavior of the shortcodes to meet your specific requirements.

With Document Library Pro, you have full control over how your PDFs are displayed, making it easy for your website visitors to find and download the documents they need.

---

## Tracking PDF Downloads with MonsterInsights

If you want to track how many visitors are downloading your PDFs, you can use the MonsterInsights plugin. MonsterInsights is a powerful Google Analytics plugin for WordPress that allows you to track various user interactions on your site, including PDF downloads.

To track PDF downloads with MonsterInsights, follow these steps:

1. Install and activate the MonsterInsights plugin from the [WordPress plugin repository](https://wordpress.org/plugins/google-analytics-for-wordpress/).
2. Connect your WordPress site to your Google Analytics account using MonsterInsights.
3. Enable the **Downloads Tracking** feature in MonsterInsights settings.
4. MonsterInsights will automatically start tracking PDF downloads on your site, providing you with valuable insights into visitor behavior.

By tracking PDF downloads, you can gain valuable data on which documents are the most popular and adjust your content strategy accordingly.

---

## Conclusion

Uploading and displaying PDFs on your WordPress site doesn't have to be complicated. By following the step-by-step instructions in this guide, you can easily upload PDFs to your WordPress Media Library or external hosting, embed them in pages or posts, and create a searchable PDF library with the help of Document Library Pro. With the added ability to track PDF downloads using MonsterInsights, you can gain valuable insights into how your audience interacts with your PDF content. Start leveraging the power of PDFs in WordPress today and provide your visitors with valuable resources they can easily access and download.