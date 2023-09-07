## Deployed code

https://emmadenton.github.io/Random-Password-Generator/

<img width="923" alt="Screenshot 2023-09-07 at 9 29 39 pm" src="https://github.com/EmmaDenton/Random-Password-Generator/assets/141465015/1f717db5-b917-4dfc-ac5e-631d9f7f8eaf">

<img width="862" alt="Screenshot 2023-09-07 at 9 29 58 pm" src="https://github.com/EmmaDenton/Random-Password-Generator/assets/141465015/8185bb51-58c7-4ba4-a841-1b154f4cdcf7">

<img width="947" alt="Screenshot 2023-09-07 at 9 30 11 pm" src="https://github.com/EmmaDenton/Random-Password-Generator/assets/141465015/bc26ee0e-ce79-4e74-8052-68b8c51c90db">

## The Task

A random password generator that allows the user to input a password length as well as select from lower case, upper case, special and numeric charaters.


## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
