# Machine Learning Questions

1. What is the difference between supervised, unsupervised, and reinforcement learning?
   Supervised learning uses labeled data to learn a mapping from inputs to outputs. Unsupervised learning works with unlabeled data to find patterns such as clusters or latent structure. Reinforcement learning trains an agent to take actions in an environment to maximize cumulative reward.

2. What is the bias-variance tradeoff?
   Bias is error caused by overly simple assumptions, which can lead to underfitting. Variance is error caused by a model being too sensitive to training data, which can lead to overfitting. Good models try to balance both so they generalize well.

3. What is overfitting and how can it be prevented?
   Overfitting happens when a model learns training data too closely, including noise, and performs poorly on unseen data. It can be reduced with regularization, cross-validation, dropout, early stopping, pruning, or more training data.

4. What is underfitting?
   Underfitting occurs when a model is too simple to capture the true pattern in the data. It typically shows high error on both training and validation sets. It can be improved by using a richer model, better features, or weaker regularization.

5. Why is cross-validation useful?
   Cross-validation gives a more reliable estimate of model performance by evaluating it on multiple train-validation splits. In k-fold cross-validation, the data is divided into k parts and the model is trained and tested k times. This reduces dependence on a single split.

6. What is regularization?
   Regularization adds a penalty term to the loss function to discourage overly complex models. L1 regularization can drive some weights to zero and help with feature selection, while L2 regularization shrinks weights smoothly and improves stability.

7. What is the difference between classification and regression?
   Classification predicts discrete labels such as spam or not spam. Regression predicts continuous numerical values such as temperature or house price. They differ in output type, loss functions, and evaluation metrics.

8. How does gradient descent work?
   Gradient descent updates model parameters in the direction that reduces the loss function. It computes the gradient of the loss with respect to each parameter and moves a small step opposite to that gradient. Repeating this process gradually improves the model.

9. What is backpropagation?
   Backpropagation is the algorithm used to compute gradients in neural networks. It applies the chain rule from the output layer backward through the network so each weight gets an update signal. Those gradients are then used by an optimizer like gradient descent.

10. What is a confusion matrix?
    A confusion matrix summarizes classification results using true positives, true negatives, false positives, and false negatives. It helps analyze the kinds of mistakes a classifier makes. It is also used to derive metrics such as precision, recall, and F1 score.

11. What is precision versus recall?
    Precision measures how many predicted positives are actually correct. Recall measures how many actual positives were successfully identified. Precision matters more when false positives are costly, while recall matters more when false negatives are costly.

12. What is transfer learning?
    Transfer learning means starting from a model that was already trained on a large dataset and adapting it to a related task. It is useful when you have limited labeled data or limited compute. It often improves performance and reduces training time.
