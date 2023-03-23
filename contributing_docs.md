# Contributing to our documentation

This documentation website is hosted in a [public GitHub repository](https://github.com/meilisearch/documentation). It is built with [VuePress](https://vuepress.github.io), written in [MarkDown](https://www.markdownguide.org/getting-started/), and deployed on [Netlify](https://www.netlify.com).

## Our documentation philosophy

Our documentation aims to be:

- **Efficient**: we don't want to waste anyone's time
- **Accessible**: reading the texts here shouldn't require native English or a computer science degree
- **Thorough**: the documentation website should contain all information anyone needs to use Meilisearch
- **Open source**: this is a resource by Meilisearch users, for Meilisearch users

## How to contribute?

### Issues

The maintainers of Meilisearch's documentation use [GitHub Issues](https://github.com/meilisearch/documentation/issues/new) to track tasks. Helpful issues include:

- Bug reports detailing technical issues with this website
- Requests for new features such as versioning or an embedded console
- Requests for new content such as new guides and tutorials

Before opening an issue or PR, please look through our [open issues](https://github.com/meilisearch/documentation/issues) to see if one already exists for your problem. If yes, please leave a comment letting us know that you're waiting for a fix or willing to work on it yourself. If not, please open a new issue describing the problem and informing us whether you want to work on it or not.

We love issues at Meilisearch, because they help us do our jobs better. Nine times out of ten, the most useful contribution is a simple GitHub issue that points out a problem and proposes a solution.

#### Creating your first issue

To open an issue you need a [GitHub account](https://github.com). Create one if necessary, then follow these steps:

1. Log into your account
2. Go to the [Meilisearch Documentation repository](https://github.com/meilisearch/documentation)
3. Click on "Issues"
4. Use the search bar to check if somebody else has reported the same problem. If they have, upvote with a 👍 and **don't create a new issue**!
5. If no one reported the problem you experienced, click on "New issue"
6. Write a short and descriptive title, then add a longer summary explaining the issue. If you're reporting a bug, make sure to include steps to reproduce the error, as well as your OS and browser version
7. Click on "Submit new issue"
8. A member of our team should [get back to you](#how-we-review-contributions) shortly
9. Enjoy the feeling of a job well done! 🎉

### Pull requests

You can also improve the documentation by making a [pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests).

Pull requests ("PRs" for short) are requests to integrate changes into a GitHub repository. The simplest way to create a PR on our documentation is using the "Edit this page" link at the bottom left of every page.

Pull requests are particularly good when you want to:

- **Solve an [existing issue](https://github.com/meilisearch/documentation/issues)**
- Fix a small error, such as a typo or broken link
- Create or improve content about something you know very well—for example, a guide on how to integrate Meilisearch with a tool you have mastered

In most cases, it is a good idea to [create an issue](#creating-your-first-issue) before making a PR. This allows you to coordinate with the documentation maintainers and find the best way of addressing the problem you want to solve.

#### Creating your first PR

To create a PR you need a [GitHub account](https://github.com). Create one if necessary, then follow these steps:

1. Go to the documentation page you'd like to edit, scroll down, and click "Edit this page" at the bottom left of the screen. This will take you to GitHub
2. If you're not already signed in, do so now. You may be prompted to create a [fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)
3. Use GitHub's text editor to update the page
4. Scroll down until you reach a box named "Propose changes"
5. Fill in the first field to give your PR a short and descriptive title—for example, "Fix typo in search API reference"
6. Use the second field to add a more detailed explanation of the changes you're proposing
7. Click the "Propose changes" button to continue. You should see a page that says "Comparing changes"
8. Make sure the base repository is set to `meilisearch/documentation` and the base branch is set to `main`. You can ignore the remaining fields
9. This screen will also show you a "diff", which allows you to see the changes you made compared to what's currently published on the documentation website
10. Click "Create pull request"
11. **Congrats, you made your first PR!** A documentation maintainer will review your pull request shortly. They may ask for changes, so keep an eye on your GitHub notifications
12. If everything looks good, your work will be merged into the `main` branch and become part of the official documentation site. You are now a Meilisearch Contributor! 🚀

## How we review contributions

### How we review issues

When **reviewing issues**, we consider a few criteria:

1. Is this task a priority for the documentation maintainers?
2. Is the documentation website the best place for this information? Sometimes an idea might work better on our blog than the docs, or it might be more effective to link to an external resource than write and maintain it ourselves
3. If it's a bug report, can we reproduce the error?

If users show interest in an issue by upvoting or reporting similar problems, it is more likely the documentation will dedicate resources to that task.

### How we review PRs

For **reviewing contributor PRs**, we start by making sure the PR is up to our **quality standard**.

We ask the following questions:

1. Is the information **accurate**?
2. Is it **easy to understand**?
3. Do the code samples run without errors? Do they help users understand what we are explaining?
4. Is the English **clear and concise**? Can a non-native speaker understand it?
5. Is the grammar perfect? Are there any typos?
6. Can we shorten text **without losing any important information**?
7. Do the suggested changes require updating other pages in the documentation website?
8. In the case of new content, is the article in the right place? Should other articles in the documentation link to it?

Nothing makes us happier than a thoughtful and helpful PR. Your PRs often save us time and effort, and they make the documentation **even stronger**.

Our only major requirement for PR contributions is that the author responds to communication requests within a reasonable timeframe.

Once you've opened a PR on this repo, one of our team members will stop by shortly to review it. If your PR is approved, nothing further is required from you. However, **if in seven days you have not responded to a request for further changes or more information, we will consider the PR abandoned and close it**.

If this happens to you and you think there has been some mistake, please let us know and we will try to rectify the situation.

## Local development

### Requirements

- [Node version](https://nodejs.org/en/) <>{">= v14 and <= v16"}</>

### Installing and running the docs

```bash
# Clone the repository
git clone git@github.com:meilisearch/documentation.git meilisearch-documentation

# Open the newly created directory
cd meilisearch-documentation

# Install dependencies
yarn install

# Run Meilisearch documentation on http://localhost:8080
yarn dev
```

### Testing

A complete test can be done using the following command:

```bash
yarn test
```

The tests are triggered on build and on any pull request to main.

#### Checking dead links

Check for broken or dead links before submitting a pull request using:

```bash
yarn check-links
```

#### Checking styling

Run the following command to check for any styling errors like extra spaces or lines in `*.vue`, `*.js`, and `*.md` files:

```bash
yarn style
```

### Handling images and other assets

Screenshots, images, GIFs, and video demonstrations should be placed in a relevant folder under `.vuepress/public/` and then referenced from any markdown file a using relative link. For example, if you create the file `.vuepress/public/my_cool_guide/my_cool_image.png`, you would embed it in your document using

```md
![A description of my cool image](/my_cool_guide/my_cool_image.png)
```

### Deployment

The documentation is deployed as a static website. The main branch is automatically deployed at [https://docs.meilisearch.com](https://docs.meilisearch.com).

You can build the static website using the following command:

```bash
yarn build
# The website is now available in .vuepress/dist and you can serve it using any webserver.
```