# Country Quiz

Country quiz is a simple interactive webapp that is focused on the viewers knowledge around countries; facts and their flags. Country quiz thrives off of viewer learning with the implementation of a score system so the viewer can revise and restart.

Country quiz is not specified to a certain genre of viewer however, for the general knowledge fanatics or the greedy geographers, this quiz is a delight. Country quiz can be used in any educational environment such as classrooms or lecture halls; could be used on the go through the multi-screen design or at home.

## Features.

 - ### Starting Screen.
   - Country Quiz's starting screen is the upmost simple and clear presentation for the viewer to have no confusion as to where they are and why they're here.
   - Immediate text that welcomes and explains to the viewer what the quiz is about and the instructions on the next step.
   - Usage of the hover element (mouse applicable only) over text.
   - Country quiz's colour scheme of dark blue, white and gold was chosen as it's smooth on the eyes but not boring with too many neutral colour's.

![Starting Screen](https://github.com/kctffs/country-quiz/assets/155545578/ff749b56-c5a3-471b-a932-8c62439033c4)

![Starting Screen Text](https://github.com/kctffs/country-quiz/assets/155545578/0e41c792-9fdd-4c74-9493-67172db80103)

 - ### Question Screen.
   - Advancing on from the start screen, you'r met with the quiz layout that has clear but bold text presenting a question with the inherited blue, white and gold colouring.
   - The container for the content fits all screen sizes comfortably leaving no room for frustration, whatever screen size the quiz is being played on.
   - Using numerical values for the questions is a big gain for the viewer as replaying the quiz gives structure and engages muscle memory in patterned learning to get it correct.

![First Question](https://github.com/kctffs/country-quiz/assets/155545578/4bd9f7c7-d46d-4b0f-bc6f-2c19675468fc)

 - ### Score System.
   - Implementing a score system is industry standard for quiz making, without it would be confusion and discomfort; ignoring the recognition of your right and wrong answers.
   - Progressing in 10 points is not a unique attribute but, it looks and feels more pleasing than progressing your tally up in 1s.
   - Country quiz's scoring system stays with the viewer after the tenth question when directed back to the homescreen so you can compete against yourself or others in the next attempt. (picture displayed later on).

![Scoring System](https://github.com/kctffs/country-quiz/assets/155545578/c2220a3c-b257-4664-803f-4041a3f25c59)

 - ### Next Button.
   - Integral feature for the quiz as it gives the viewer more time on a question if they have clicked but unsure.
   - Next button includes the hover attribute to make it more profound. (mouse applicable only).
   - Only appears after the first chosen answer has been made.

![Next Button](https://github.com/kctffs/country-quiz/assets/155545578/36d7aa74-a5c2-4242-a1e6-47195d46e7ab)

 - ### Returned Starting Screen,
   - Country quiz returns the viewer back to the start after answering the tenth question; excluding the 'next' button.
   - Previous scores from the attempt before stay with the viewer to either motivate or congragulate on marks handed.
   - Diversion straight back to starting screen is less clicks for the viewer but more enticing to replay the game.
   - Scoring resets as viewer clicks to get back into the quiz.
  
![Restarted Starting Screen](https://github.com/kctffs/country-quiz/assets/155545578/81d131f8-e739-4864-b6a5-f1820a8944c4)

 - ### Future Features.
   - Including more questions whether that be from different genres relating to countries eg. Seas, personel, food, music etc.
   - Implementing more colour in the quiz itself.
     - Utilising green for correct and red for incorrect.
     - Adding photo or video questions for more of an appealing quiz.
   - Daily, monthly or weekly assortment of questions that are different.
   - Highscores system that is viewed internationally.

## Testing.

 - From the first deployment of Country Quiz, there was various problems from CSS styles being unresponsive, buttons and text being visable when it was not intended; JS not fully functional.
   - Being a first deployment, this was expected and the main goal was to view the website from a viewers perspective and calculate what could be done to make the experience better and this was a big advantage when continuing on with the project.

 - In the larger screen viewings, the space around the quiz is larger than need be.
   - Fixing this is very simple and would not take too long, either implemetning more structual CSS styling or adding elements in the open space to fill.
   - This by no means is a bad experience as the soul purpose is the quiz and the viewer is immediately drawn in with no distractions.

 - ### Validator Testing.
   - HTML Validator testing came back with no erros and passed through the official [W3C Validator](https://validator.w3.org/)

 ![HTML VALID prtflo 2](https://github.com/kctffs/country-quiz/assets/155545578/183798b3-d7ce-4f31-b74a-91aa0914b890)

   - CSS Validator testing came back with no erros and passed through the official [Jigsaw Validator](https://jigsaw.w3.org/css-validator/)

 ![CSS VALID prtflo 2](https://github.com/kctffs/country-quiz/assets/155545578/6a6a30f5-3b58-452d-a8b9-4cbbda73b8fd)

   - JS Validator testing came back with no erros and passed through the official [Jshint Validator](https://jshint.com/)
     - Returning:
      - There are 8 functions in this file. Function with the largest signature take 1 arguments, while the median is 0.5. Largest function has 9 statements in it, while the median is 3.5. The most complex function has a cyclomatic complexity value of 3 while the median is 1.5.

 - ### Chrome's Lighthouse Report.
   - Chrome's lighthouse report gave Country Quiz's best score after three analysations all returning 100 ratings. The feedback from Chrome's Lighthouse report was pleasing to see however, not sure if the tool runs through the whole webapp.
     - If the report covers the whole site and runs through the JS functions, then amazing.
       - This can be regarded if the evaluation only covers the page when the testing starts.

 ![Chrome Lighthouse](https://github.com/kctffs/country-quiz/assets/155545578/8f7d3982-c7dd-47f2-80b2-77ed55a9ce61)

 - ### Bugs.
   - HTML and CSS were both clear from bugs as previous projects and learning have played their part in creating and styling the webapp.
   - Being a first time JS project, the bugs encountered where not only frustrating but, time consuming to breakdown and solve.
    - One bug encountered when implementing a scoring system into the quiz. The function created was being called and was tallying the score however, it would only tally on the first question and none after. This was resolved by having the variable moved as it was being called in the wrong function.
    - Another example of a bug encountered was in initial deployment, the quiz only got so far and then failed from an undefined variable. This was resolved by correcting the variable to the one needed being called.

 – ### Unfixed Bugs.
  - The only unfixed bug in the Country Quiz is the scpring tally as it continues to increase the score even after it has been selected once already.

 - ### Deployment.
   -  Country Quiz was deployed using GitHub and this was completed by:
   -  Starting in the GitHub repository, opening up the settings tab.
   -  On the far left, selecting the sub-catagory of *Pages*.
   -  Selecting the dropdown menu in the *Branch* catagory and choosing *Main*.
   -  After selecting this catagory, GitHub will refresh and provide a deployment catagory on the far right of your repository.
   -  [The link to the live webapp for Country Quiz is here:](https://kctffs.github.io/country-quiz/)
