Code Katas
=========

#TDD

##The TDD mantra – Red/green/refactor:

- Red : Write a little test that doesn’t work, and perhaps doesn’t even compile at first.
- Green : Make the test work quickly, committing whatever sins necessary in the process.
- Refactor : Eliminate all of the duplication created in merely getting the test to work.

##More about the TDD Process:

- Add a little test.
- Run all tests and fail.
- Make a little change.
- Run the tests and succeed.
- Refactor to remove duplication.
- TDD Rules:

Write a failing automated test before you write any code. Also remember, start small or not at all.
Eliminate duplication: By eliminating duplication before we go on to the next test, we maximize our chance of being able to get the next test running with one and only one change.

##Refactoring Techniques:

- Fake implementation: Return a constant and gradually replace constants with variables until you have the real code.
- Obvious implementation: Type in the real implementation.
- Triangulation: If two receiving stations at a known distance from each other can both measure the direction of a radio signal, 
then there is enough information to calculate the range and bearing of the signal. This calculation is called Triangulation. 
By analogy, when we triangulate, we only generalize code when we have two examples or more. 
We briefly ignore the duplication between test and model code. 
When the second example demands a more general solution, then and only then do we generalize.

###Useful Links
  - Regole del "simple design": http://c2.com/cgi/wiki?XpSimplicityRules
  - Le tre regole del TDD (By Uncle Bob): http://butunclebob.com/ArticleS.UncleBob.TheThreeRulesOfTdd
  - Test Drive Development by Example (Kent Beck): http://www.amazon.com/Test-Driven-Development-By-Example/dp/0321146530
  - TDD by Examples Money: http://www.eecs.yorku.ca/course_archive/2003-04/W/3311/sectionM/case_studies/money/KentBeck_TDD_byexample.pdf
  - Formato delle user story con acceptance criteria: http://schuchert.wikispaces.com/Monopoly%28r%29#Release1
  - JB spiega il workflow di TDD: http://www.jbrains.ca/permalink/how-test-driven-development-works-and-more
