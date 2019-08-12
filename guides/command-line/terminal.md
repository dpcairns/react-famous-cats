Terminal
===

> Your developer portal!

## Prerequisites

Installed including `git`

## Why?

1. Speed of use (keyboard)
1. Simplicity (no UI)
1. Power (can be dangerous 🔥)
1. Additional tools run from here (CLI): `git`, `npm`, `heroku`

## Files and Directories

### Paths

sigil | meaning
--- | ---
`~` | home
`/` | root (and path separator)
`.` | current directory
`..`| parent directory

### Autocomplete ⌨️ 🔣

sigil | meaning
--- | ---
`TAB` | auto-complete (**use me!**)
`⬆⬇` | navigate history
`CTRL` + R | find in history
`CTRL` + A | go to beginning of line
`CTRL` + E | go to end of line

### Warning!

Removing things from the command line does **not** put them in the trash/recycling. They are gone. Forever. These commands are marked with 🔥 below

### Directory Commands

command | meaning | notes
--- | --- | ---
`cd` | change `<directory>` | can use relative paths!
`ls` | list `<directory>` | `ls -a` for system files
`mkdir` | make `<directory>` | can pass multiple directories to create
`rmdir`🔥 | remove `<directory>` | doesn't work if directory has files

### File Commands

command | meaning
--- | --- 
`touch` | create `<file>`
`cat`   | read `<file>`
`echo "content" > file` | write a quick snippet to a file
`rm`🔥 | remove `<file>`

## Use the `man` Luke

You can look at the "manual" for command line commands by typing `man <command>`, for example:

```sh
> man cd
```

will show you the built-in documentation for `cd` (change directory).

If you are using git bash for your terminal on windows, it won't be able to find the `man` command. Instead try `<command> --help`. This: 

```sh
> cd --help
```

will show you the documentation for `cd`  (change directory)

