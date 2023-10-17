# Business Recommendation

* First and foremost, having a F-1 score of 0.79 is not the best. However, this is a real world dataset with a very imbalanced data. We are right on the cusp of the 80/20 rule, so overall not terrible! Moreover, on the test partition, our total accuracy is 82%, which is pretty decent. We have a precision of 0.33 and a recall of 0.17, these two metrics can definitely and should be drastically improved for better model predictability, especially concerning our target class - 1 (Fraud). Having said this, the Permutation Importance Plot highlighted the following 5 variables that were most important:

annual_income

age_of_driver

claim_est_payout

past_num_of_claims

age_of_vehicle

* Annual income from the Partial Dependence plot shows a very intersting plot that we highlighted in our exploration as well. It starts at probability value of around 0.4 and picks, generally stutters in the 0.5 - 0.6 range before crashing back down. As we noted, the affluent and poor don't seem to be invovled in fraud cases, so the middle class is definitely our target group here. While still very broad, it definitely lends some insight into potential policy cancellations.

* However, that is just one variable, the next variable we identified was age of the driver. Looking at the Partial Dependence plot, the middle is too noisy, so no real value can be extracted from there. However, younger and older people have a probability value that is much generally below 0.5. This means that people who are could commit fraud are generally middle-aged people. Another key statistic to keep an eye out as an insurance policy maker.

* Next, looking at the estimated claim payout PDP, we clearly see 3 spikes generally on the lower of the estimated claim payout scale. This means that people that commit fraud, want to not act too suspicious and keep their payout relatively low. Therefore, insurance policy makers should definitely keep an eye out for the lower claim payouts, as this is where the fraud or con lies.

* The past number of claims plot shows a similar story. A con artist would only only file a claim an average number of times, as this is standardized data. To hide in the shadows and would not continously make fraudulent claims, so insurance policy makers again should focus on this set of people.

* Lastly, the age of the vehicle also shows a similar story. Generally the cars are 1 standard deviation below the mean or 1 standard deviation above the mean, where fraud occurs. So policy makers should take a look at the mean age of the cars in their policy and verify claims that fall into this bucket.

* Overall, it would seem that a policy cancellation should take place if an individual falls in the middle class bucket, is middle-aged, has generally lower claim estimated payouts, an average to low number of past claims, and his/her car is around the mean age of all cars.

* Having said this, as mentioned above, this model is quite flawed, when looking at the precision and recall. Of all the predictions made, only 33% are accurate and of all the actual frauds, only 17% are predicted. So further improvements need to be made to this model before it can predict more accurately!

# Learnings

**Learning From Data Exploration**

In data exploration process, we have used several different methods to identify relations and potential features amoung dataset. Our group are filtering data by reasonable criterias, and split the whole dataset to three social groups: wealthy people, middle classes and low income people. In futher analysis, we have a suprising investigation result, which is that the most of people who committing insurance fraud are come from middle class. What we learned by explorating the dataset is that Some true patterns contained in the data may contradict intuition, hence any assumptions prior to data exploration are unreliable.

**Learnings from Models/Plots**

Through the Histogram for all variables, we gained insights into the distributions of variables, allowing us to focus on those that we believed to be strongly associated with insurance fraud. Notably, the annual income and safety_rating variables exhibited a left-skewed distribution, while Past_num_of_claims had a right-skewed distribution. Additionally, we observed contrasting distributions of "0's" and "1's" for the Witness_present and High_education_ind attributes, with witness_present having a high frequency of "0's" and the other showing the opposite pattern.

The Warm and Cool map highlighted a strong correlation (~.998) between annual_income and age_of_driver attributes, suggesting a relationship between these two factors in the context of detecting insurance fraud This finding indicates that higher annual incomes tend to correspond with certain age groups, potentially serving as indicators of fraudulent claims.

**Learnings from using Hyperparameters:**

By implementing Hyperparameters in Decision Classifier model, we found that tuning hyperparameters like the maximum depth of the tree (max_depth), minimum samples to split a node (min_samples_split), minimum samples required (min_samples_leaf), and the maximum number of features considered for each split (max_features) influenced the model's interpretability and performance. Using skicit learn, we were able to delve deeper into these parameters and kept altering their values to reveal the most considered features for identifying fradulent claims.

When hyperparameter tuning for the 5 different models, we learned that each model has its own set of specific parameters that we use to influence its performance and alter the F1. Using skicit learn, we were able to understand the different parameter types such as regularization in Logistic Regression, tree parameters in Decision Tree Classifier and Random Forests, boosting classifier parameters in Gradient Boosted Classifier, and the various structure related parameters in Neural Network models.

**Class/Project Related Learnings:**

Throughout this project, our team had hands on practice with Python and how it can be used in real-world scenarios. By applying various models and exploring different attributes of our data, we were able to gain a deeper understanding of the patterns and variables that are indicative of fraudulent claim and how an insurance company may detect this.
Throughout this project, we worked in a team of three, each with diverse experiences and different levels of Python familiarity. We bettered our communication tactics, and learned to foster an environment in which team members felt comftorable to ask questions, state expectations, etc. We learned to use each others strengths to drive this project to the finish line!

**General Project Learnings:**

One of the major things I learned is that pandas and numpy arrays cannot take categorical variables. I had to manually switch all the categorical variables into binary or use dummy variables. This is quite interesting and different from what I was used to in JMP, however behind the scenes, I betthis is what JMP does as well.

Secondly, I realized how difficult it really is to hit 80-90% accuracy and F-1 score when using a heavily imbalanced dataset. Even after running several iterations, it would very difficult to move that needle up by even 1 or 2 %.

Thirdly, car insurance fraud seems to be quite difficult to predict, given this dataset represents the real world.I can imagine how many different models and time must be spent finding the most parsimonious model.Especially, given how long it took me to run just 1-2 gridsearching models.

Fourthly, this is the first time where I have used fit.transform and then transform on the trainingand test partition respectively. Previously, in JMP, I have always explored the entire dataset and made modifications to both train and test, before splitting it. I guess in the real world this is a big red flag as it causes data leakage. I learned the importance of data leakage to come up withan accurate and truthful model!

Lastly, not being able to drop rows was very tough. I feel that some of the values that were imputedmust have been very off the mark, causing the performance of the model to degrade. There is a very fine line between losing rows or data and imputing to get that perfect model.