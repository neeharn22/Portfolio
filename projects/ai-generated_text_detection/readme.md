The objective of this project was to identify AI-generated text vs. human written text. The problem statement is as follows: Can you predict the 'ind' (0= human, 1 = AI) as a function of the 768 document embeddings, the word count and the punctuation?

All text data was converted into embeddings and the project further details the outcomes of this endeavor. Below are some comments that arose during this project.

# **Conclusion**

1. It can be seen that the final test F-1 score is 0.743, which seems pretty good, given the nature of this problem. We do not know what the document/sentences are and therefore what the document embeddings mean. However, having said this, recall seems to have a pretty steep drop-off, which is a bit concerning, while precision does not get a huge hit. There are definitely more improvements that can be made to improve the predictive power of this model.

2. This project was fun as we explored how the embeddings can be featured engineered. It was challenging as there are no actual words, rather just numbers. This is were we leveraged statistical features to understand how data is distributed and hoped that neural network would detect hidden patterns in two dataset. Having said this, in our model we did not include any feature engineered columns as our model did better with just the raw data. This means that more emphasis and time would be need to be put into feature engineering.

3. Statistical features such as mean, median, std, sum, range were calculated for each record. Its distribution was also plotted to understand how these features are distributed in two categories. EDA analysis presents overview of how statistical features are distributed.

4. PCAs were introduced, however, it was found that the model performed better when all features were included in it. It is understood that model will perform little poorer when only certain dimensions of the data are considered. Hence, we decided to include all the features. The classification report and F-1 report for the PCA trial are reported in the appendix.

5. Standard scaler was used to fit the train dataset and transform the test dataset. Proper care was taken not to introduce data leakage in the model.

6. Plotting the learning curves gave us an idea how model is performing on the train and test dataset. It was crucial to know whether the model is over fitting or under fitting. It can be seen that our model in the learning curves, but early callback will help us prune it back.

7. Resampling techniques were also used, however, those did not provide better results. The code for and metrics are shown in the appendix below.

8. We tried to leverage EDA to see which of the embeddings played a bigger role in predicting our target class. However, from the EDA, we can only spot check some of the embeddings, not all can be seen using a heatmap or even correlation matrix as there are over 768 embedddings in total.

9. CNN/RNN produced very poor F-1 scores and results. Therefore, from our very first ierations we stuck to more simple dense layers with a lot of dropout to not overfit. Also we tried playing with autokeras, which gave us the hint of using a learning rate for Adam, but the model itself was not as good as the one used in the project. Moreover, we tried different activation functions, such as leaky relu, elu, tanh, sigmoid, and more, however again relu reigned king. Always giving the best performance, even after mixing and matching the activation functions.