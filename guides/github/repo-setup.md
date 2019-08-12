# Creating a new Github Repository for your Mob

Make sure you have TravisCI set up via GitHub Marketplace

## Create a New Repository

- Choose the owner
    - For mob builds: select your mob GitHub org
    - For solo builds: select your GitHub user
- Name can be similar or the same name as the current lab 
- Add an optional description of the current lab 
- Check the box for "initialize with a README.md"
- Leave "Add .gitignore" and "Add license" set to `none`
- Make sure "Travis CI" is **checked**
- Click `Create repository` button 

## Clone the Repository Locally

- Copy the **HTTPS** link prompted under the ‘Quick Setup’ section or use the copy to clipboard icon on the right-hand side 
- In your terminal/bash, cd into the directory you wish to store your repos. We recommend a projects or repos folder and then a folder for each class (ie. BC1, BC2, etc) to keep your projects organized. 
- Clone repo into your desired directory in the terminal 
    ```sh
    $ git clone <copied path>
    $ cd <repo-name>
    $ touch .eslintrc .travis.yml 
    $ code . 
    ```
- Copy/paste contents of .eslintrc and .travis.yml from the configs folder
- Commit the changes and push the repo back to GitHub 
    ```sh
    $ git add -A 
    $ git commit -m "set up configs"
    $ git push origin master 

- Create a `dev` branch based on `master` and push to GitHub:
    ```sh
    $ git checkout -b dev 
    $ git push -u origin dev 
    ```

- Update README.md with the title of your repo, a brief description of the project 
- Add and commit. 
    ```sh
    $ git add -A 
    $ git commit -m ‘add README’ 
    ```
- You can push with shorter `git push`
    ```sh
    $ git push
    ```

**&gt;&gt; Use dev branch for all work**

**&gt;&gt; When you’re ready to turn in a lab, [make a PR to merge dev with master and submit a link to the PR](https://github.com/alchemycodelab/bootcamp-one/blob/master/guides/github/pr-submission.md).**
