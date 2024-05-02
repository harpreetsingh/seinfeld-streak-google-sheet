# seinfeld-streak-google-sheet

# What is this?
Implements the seinfeld streak in Google sheets

A simple tool to build a daily habit inspired by Seinfeld. 
Counts the number of days the streak has been going or broken

Read more here
![Screen Shot 2024-05-02 at 3 13 03 PM](https://github.com/harpreetsingh/seinfeld-streak-google-sheet/assets/513957/3b9dd300-73a8-4495-ace4-4b5dcdb5f679)

# Output: 
"Done Streak": counts the number of times the character "x" (see column 16) is found. 
"Miss Streak": counts the misses, looks for an empty "" character

# Input:
Yesterdays row: Starts count backgwards from yesterday. This assumes today is empty 
Starting row: The first day where to start counting from
done character: "x", "" or empty to count miss streaks

# How to use: 
[Google spreadsheet template](https://docs.google.com/spreadsheets/d/1u4E60_KhlANhlQ3k3J6329dIqWI1peDJ5sAHMaHoOaQ/edit#gid=0)

or
copy-paste the function into a Google sheet-> Extensions -> AppScript

# Invoking the function

=getCurrentStreak (yesterdaysRow, startingRow, streakIdentifier)
