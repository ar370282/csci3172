# Activity - Lecture 10

* *Date Created*: 27 10 2025
* *Last Modification Date*: 27 10 2025
* *GitLab URL*: https://git.cs.dal.ca/jorelia/csci-3172.git


## Authors

If what is being submitted is an individual Lab or Assignment, you may simply include your name and email address. Otherwise list the members of your group.

* ARPIT JORELIA(ar370282@dal.ca) - Developer


## First Name
* Regex - ^[A-Za-z]+(?: [A-Za-z]+)?$

* Test Cases
Maria           - Passed
maria           - Passed
maRia           - Passed
Maria Gabriella - Passed
maria Gabriella - Passed
Maria gabriella - Passed


## Last Name
* Regex - ^[A-Za-z]+(?:['-][A-Za-z]+)*$

* Test Cases
Smith       - Passed
smith       - Passed
smith-burns - Passed
Smith-Burns - Passed
smith-Burns - Passed
O'Brien	    - Passed
o'Brien	    - Passed
O'brien	    - Passed
o'brien	    - Passed


## Email
* Regex - ^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$

* Test Cases        
someone@somewhere.com                       - Passed
Someone-someone@somewhere.com               - Passed
someone.someone@somewhere.com               - Passed
Someone-someone@somwewhere.com              - Passed
someone@somewhere-somewhere.com             - Passed
Someone-someone@somewhere.somewhere.com     - Passed
someone.someone@somewhere.co                - Passed
Someone-someone@somwewhere.info             - Passed
someone.someone@somewhere-somewhere.co      - Passed
someone.someone@somewhere-somewhere.info    - Passed
Someone-someone@somwewhere.somewhere.co     - Passed
Someone-someone@somwewhere.somewhere.inform - Passed

## Password
* Regex - ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{12,}$

* Test Cases
aB@3bc_e-uxE - Passed
aB@3bc_ex-U! - Passed
aB@3bc_!5-Ux - Passed
2aB#n!3ha-b4 - Passed

## Reflection
Q.  How did using a tool help you (or not) in this process? What challenges did you face while completing this activity? 
Using Regexr.com helped me visualize and test my expressions quickly. I could instantly see which test cases passed or failed and adjust the patterns instantly and accordingly.s

The main challenge was balancing strict validation while also maintaining flexibility like allowing middle names, different domain styles, and various password characters was trucky and took some iterations. Overall, using an online tool made it easier to debug and understand the logic behind each regex.

## Acknowledgments
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
* https://regexr.com/
