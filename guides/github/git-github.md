GitHub/Git
===

> Managing Code

## Prerequisites

Have a `GitHub` account.

## Github vs Git???

* Git is a system for 
    1. Managing changes to files
    2. Distributing copies of code, including different versions of the code.
* GitHub is an online site to which you can distribute your code

## Add and Commit

(Note: Will seem redundant at first to add and commit!)

command | notes
---|---
`git status` | to make sure you have changes to the repo
`git add -A` | to "stage" the changes
`git status` | this time, to check that everything has been staged
`git commit -m "commit message"` | to "take the snapshot". "why" (not "what")
`git status` | this time, to check everything is committed
`git push origin master` | to share the changes with your remote repo
`git status` | overkill, to check that local in sync with origin

## Setting up Credentials

During the next step of creating a repository, [let's follow these instructions](https://help.github.com/articles/caching-your-github-password-in-git/). Make sure
to use the right OS!