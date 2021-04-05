# #CloudGuruChallenge: Your resume in Azure

Here is my solution to the [Azure Resume Challenge](https://acloudguru.com/blog/engineering/cloudguruchallenge-your-resume-in-azure)

View it live [here](https://www.gwynethpena.com)


![Diagram](img/diagram.png)

## Front end resources

- Since I am a terrible designer, I used this template to create the site. [HTML + CSS template](https://www.styleshout.com/free-templates/ceevee/)
- I'm afraid of JavaScript, but this article explains well how to use it to make an API call. [How to make the Javascript API call](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data) 
- You'll have to enable CORS with Azure Functions locally and once it's deployed to Azure for you website to be able to call it. [Enable CORS for local Azure Functions](https://github.com/Azure/azure-functions-host/issues/1012)
- This is how you can deploy your site to blob storage. [Deploy static site to blog storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-host)
- and this is how you can set it up in GitHub actions, CI/CD baby! [Set up a GitHub Actions Workflow to deploy your static website in Azure Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-static-site-github-actions)