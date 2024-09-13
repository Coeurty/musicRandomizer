# Music Randomizer

## Description

A simple script to prefix music files with a random number, so that they are played in random order on USB stick players without a shuffle function, such as some car players that sort music in alphabetical order.

## Usage

1. Place the Windows executable (`musicRandomizer.exe`) in the folder containing the music files you want to randomize.
2. Run the executable.

The script works with the following extensions: `mp3`, `wav`, `wma`, `flac`, `aac`, `m4a`, `ogg`.

### Example result

**Before execution:**
- Music1.mp3
- Music2.mp3
- Music3.mp3

**After 1st execution:**
- 15_Music2.mp3
- 59_Music1.mp3
- 90_Music3.mp3

**After 2nd execution:**
- 26_Music3.mp3
- 48_Music2.mp3
- 68_Music1.mp3

Each run generates a new random prefix for each file, existing or new.

## Building the Executable

The npm package `pkg` is used to compile the js into an executable
(https://www.npmjs.com/package/pkg)

1. Install `pkg` globally using npm:
```sh
npm install -g pkg
```

2. Compile the script into an executable:
```sh
pkg musicRandomizer.js --targets node16-win-x64
```



