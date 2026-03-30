# Popular Machine Learning Questions

1. What is the difference between supervised, unsupervised, and reinforcement learning?
   Supervised learning trains on labeled data to predict an output. Unsupervised learning finds hidden patterns in unlabeled data (e.g. clustering, dimensionality reduction). Reinforcement learning trains an agent to take actions in an environment to maximize cumulative reward.

2. What is the bias-variance tradeoff?
   Bias is error from overly simplistic assumptions (underfitting); variance is error from sensitivity to fluctuations in training data (overfitting). Increasing model complexity reduces bias but increases variance. The goal is to minimize total error by finding the right balance.

3. What is overfitting and how can you prevent it?
   Overfitting is when a model learns the training data too well, including its noise, and fails to generalize to new data. Prevention techniques include regularization (L1/L2), dropout, early stopping, cross-validation, pruning, and collecting more training data.

4. What is underfitting and how do you detect it?
   Underfitting is when a model is too simple to capture the underlying patterns in data. It shows up as high training error and high validation error simultaneously. Fix it by using a more complex model, adding more features, or reducing regularization.

5. What is cross-validation and why is it used?
   Cross-validation (e.g. k-fold) splits data into k subsets, trains on k-1 folds and tests on the remaining fold, rotating through all folds. It gives a more reliable estimate of how well a model generalizes and reduces dependence on a single train/test split.

6. What is regularization? When do you use L1 vs L2?
   Regularization adds a penalty to the loss function to constrain model weights and prevent overfitting. L1 (Lasso) penalizes the absolute sum of weights — it drives some weights to exactly zero, useful for feature selection. L2 (Ridge) penalizes the squared sum — it shrinks weights smoothly and works well when most features are relevant.

7. What is the difference between classification and regression?
   Classification predicts a discrete class label (e.g. spam/not spam). Regression predicts a continuous numerical value (e.g. house price). They use different loss functions: cross-entropy for classification, MSE or MAE for regression.

8. How does gradient descent work?
   Gradient descent iteratively updates model parameters by computing the gradient of the loss function with respect to each parameter and stepping in the opposite direction (downhill). The step size is controlled by the learning rate. It repeats until the loss converges to a minimum.

9. What is backpropagation?
   Backpropagation computes gradients of the loss with respect to each weight in a neural network using the chain rule. A forward pass computes predictions and the loss; the backward pass propagates the error gradient layer by layer so an optimizer can update the weights.

10. What is the vanishing gradient problem and how do you fix it?
    In deep networks, gradients shrink exponentially as they propagate back through layers with saturating activations (sigmoid/tanh), causing early layers to learn very slowly or not at all. Fixes include using ReLU activations, batch normalization, residual (skip) connections, and careful weight initialization (He, Xavier).

11. What is the difference between batch, mini-batch, and stochastic gradient descent?
    Batch GD computes the gradient over the entire dataset — accurate but slow for large data. Stochastic GD (SGD) updates on one sample at a time — fast but noisy. Mini-batch GD is the standard compromise: gradients are computed on small batches (32–256 samples), balancing speed and stability.

12. What is a learning rate and how do you choose one?
    The learning rate controls how large a step gradient descent takes at each update. Too high and training diverges; too low and it converges slowly. Common approaches: learning rate schedulers (decay over time), cyclical learning rates, and adaptive optimizers like Adam that tune the rate per parameter automatically.

13. How does a decision tree work?
    A decision tree recursively splits the data on the feature and threshold that best separates the classes (using metrics like Gini impurity or information gain). Each internal node is a decision rule; each leaf is a predicted output. Trees are interpretable but prone to overfitting if grown too deep.

14. What is the difference between bagging and boosting?
    Bagging trains multiple models in parallel on random bootstrap samples of the data and aggregates their predictions (e.g. Random Forest). It reduces variance. Boosting trains models sequentially, where each model focuses on the errors of the previous one (e.g. XGBoost, AdaBoost). It reduces bias but can overfit noisy data.

15. How does a Random Forest work?
    Random Forest builds many decision trees, each trained on a random bootstrap sample of the data and using a random subset of features at each split. Final predictions are made by majority vote (classification) or averaging (regression). The diversity among trees reduces variance and makes it robust to overfitting.

16. What is XGBoost and how does it improve on gradient boosting?
    XGBoost is an optimized gradient boosting library. It improves on standard gradient boosting by using second-order (Hessian) gradient information, built-in L1/L2 regularization, column and row subsampling, efficient histogram-based split finding, and hardware-aware parallelism — making it faster and more accurate.

17. What is a support vector machine (SVM)?
    An SVM finds the hyperplane that maximizes the margin between two classes. Data points closest to the hyperplane are called support vectors. SVMs work well in high-dimensional spaces and are effective when there is a clear margin of separation. For non-linear problems, the kernel trick is used.

18. What is the kernel trick in SVMs?
    The kernel trick implicitly maps input data into a higher-dimensional space where it becomes linearly separable, without explicitly computing the transformation. Common kernels include RBF (Radial Basis Function), polynomial, and sigmoid. This allows SVMs to solve non-linear classification problems efficiently.

19. How does k-nearest neighbors (KNN) work?
    KNN classifies a new data point by finding the k closest points in the training set (using a distance metric like Euclidean) and taking a majority vote of their labels. It is simple and non-parametric but can be slow at inference and sensitive to irrelevant features and the scale of data.

20. What is the curse of dimensionality?
    As the number of features increases, the volume of the feature space grows exponentially, making data increasingly sparse. This causes distance-based algorithms (KNN, SVM) to break down as all points become roughly equidistant. Mitigation strategies include dimensionality reduction (PCA), feature selection, and regularization.

21. What is PCA and when would you use it?
    PCA (Principal Component Analysis) is a dimensionality reduction technique that projects data onto orthogonal axes of maximum variance (principal components). Use it to reduce noise, speed up training, remove correlated features, or visualize high-dimensional data in 2D/3D. It is unsupervised and linear.

22. What is the difference between generative and discriminative models?
    Discriminative models (e.g. logistic regression, SVM) learn the decision boundary between classes — they model P(y|x) directly. Generative models (e.g. Naive Bayes, GANs) learn the distribution of the data itself — they model P(x|y) and P(x), and can generate new samples.

23. What is a confusion matrix?
    A confusion matrix is a table that summarizes classification results with four values: True Positives (TP), True Negatives (TN), False Positives (FP), and False Negatives (FN). It is used to compute metrics like accuracy, precision, recall, F1 score, and to understand where a model makes mistakes.

24. What is the difference between precision and recall?
    Precision is the fraction of positive predictions that are actually correct: TP / (TP + FP). Recall (sensitivity) is the fraction of actual positives that were correctly identified: TP / (TP + FN). Precision matters when false positives are costly; recall matters when false negatives are costly.

25. What is the F1 score and when is it preferred over accuracy?
    The F1 score is the harmonic mean of precision and recall: 2 x (precision x recall) / (precision + recall). It is preferred over accuracy when the dataset is imbalanced — accuracy can be misleadingly high if the model just predicts the majority class, while F1 penalizes poor precision or recall.

26. What is the ROC curve and what does AUC represent?
    The ROC (Receiver Operating Characteristic) curve plots True Positive Rate against False Positive Rate at various classification thresholds. AUC (Area Under the Curve) summarizes the curve in a single number between 0 and 1. AUC = 1.0 is a perfect classifier; AUC = 0.5 is no better than random.

27. What is feature engineering and why does it matter?
    Feature engineering is the process of creating, transforming, or selecting input features to improve model performance. It includes encoding categorical variables, creating interaction terms, binning, log transforms, and domain-specific features. Good features often matter more than the choice of algorithm.

28. How do you handle missing data in a dataset?
    Common strategies: remove rows or columns with too many missing values, impute with the mean/median/mode, use model-based imputation (e.g. KNN imputer), or flag missingness as a separate binary feature. The right approach depends on why data is missing (MCAR, MAR, MNAR) and how much is missing.

29. How do you handle imbalanced datasets?
    Techniques include resampling (oversampling the minority class with SMOTE, undersampling the majority), using class-weighted loss functions, choosing appropriate metrics (F1, AUC instead of accuracy), and using ensemble methods like balanced random forests.

30. What is the difference between normalization and standardization?
    Normalization (min-max scaling) rescales features to a fixed range, typically [0, 1]. Standardization (z-score scaling) rescales to have zero mean and unit variance. Use normalization when the distribution is not Gaussian or for neural networks; use standardization for algorithms sensitive to feature scale like SVM, linear regression, and PCA.

31. What is a neural network and how does it learn?
    A neural network is a stack of layers of interconnected nodes (neurons) with learnable weights. It learns by making a forward pass to compute predictions, calculating the loss, then using backpropagation and gradient descent to adjust the weights to minimize the loss over many iterations.

32. What is an activation function? Name a few common ones.
    An activation function introduces non-linearity into a neural network, allowing it to learn complex patterns. Without it, the network collapses to a linear model. Common ones: ReLU (max(0, x)) for hidden layers; Sigmoid for binary classification outputs; Softmax for multi-class outputs; Tanh for outputs between -1 and 1.

33. What is dropout and how does it reduce overfitting?
    Dropout randomly sets a fraction of neuron activations to zero during each training step, preventing neurons from co-adapting too much. This forces the network to learn more robust, redundant representations. At inference, all neurons are active and outputs are scaled by the dropout rate.

34. What is batch normalization?
    Batch normalization normalizes the inputs of each layer to have zero mean and unit variance across the mini-batch, then applies learnable scale and shift parameters. It stabilizes and accelerates training, allows higher learning rates, reduces sensitivity to weight initialization, and has a mild regularizing effect.

35. What is a convolutional neural network (CNN) and what is it used for?
    A CNN uses convolutional layers to scan input data with learned filters that detect local patterns like edges, textures, and shapes. Pooling layers reduce spatial dimensions. CNNs are the standard architecture for image classification, object detection, segmentation, and any task with grid-like spatial structure.

36. What is a recurrent neural network (RNN)?
    An RNN processes sequential data by maintaining a hidden state that carries information from previous time steps. At each step, it takes the current input and the previous hidden state to produce an output. RNNs are used for time series, text, and speech but suffer from vanishing gradients over long sequences.

37. What is the vanishing gradient problem in RNNs and how does LSTM solve it?
    In standard RNNs, gradients shrink exponentially as they flow back through many time steps, making it impossible to learn long-range dependencies. LSTM (Long Short-Term Memory) solves this with a cell state and three gates (input, forget, output) that control what information is kept or discarded, allowing gradients to flow over long sequences.

38. What is an autoencoder?
    An autoencoder is a neural network trained to compress input data into a lower-dimensional latent representation (encoder) and then reconstruct the original input from it (decoder). It is used for dimensionality reduction, anomaly detection, denoising, and as a building block for generative models.

39. What is a generative adversarial network (GAN)?
    A GAN consists of two networks trained together: a Generator that creates fake data to fool the Discriminator, and a Discriminator that tries to distinguish real from fake data. Through this adversarial process, the generator learns to produce increasingly realistic outputs. GANs are used for image synthesis, data augmentation, and style transfer.

40. What is transfer learning and when would you use it?
    Transfer learning reuses a model pre-trained on a large dataset (e.g. ImageNet, large text corpora) as a starting point for a different but related task. Use it when you have limited labeled data, limited compute, or when your task is similar to the source domain. It dramatically reduces training time and often improves performance.