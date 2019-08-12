Class Submit Guide
===

## PRs for Lab

- Open all PRs against `master`
- After merging PR on GitHub:
    1. `git checkout master`
    1. `git pull`
    1. `git checkout <branch-you-were-on>`
    1. `git merge master`

## Making a change to prior lab ("hot-fix")

This is local:

1. `git checkout <branch-from-prior-day>`
1. do work: add, commit (rinse, repeat)
1. `git push` - propagate these changes to GitHub
1. `git checkout <branch-you-were-on>`
1. `git merge <branch-from-prior-day>`
    - File may pop up! Close it
    - If you have merge conflict, seek help :)