# Data Structures and Algorithms Questions

1. What is the difference between an array and a linked list?
   An array stores elements in contiguous memory, which allows fast indexing but makes insertions and deletions expensive in the middle. A linked list stores elements as nodes connected by pointers, making insertions and deletions easier but random access slower.

2. What is a stack?
   A stack is a linear data structure that follows the Last In, First Out principle. The main operations are push, pop, and peek. It is commonly used for function calls, undo operations, and expression evaluation.

3. What is a queue?
   A queue is a linear data structure that follows the First In, First Out principle. Elements are inserted at the rear and removed from the front. It is useful in scheduling, buffering, and breadth-first search.

4. What is the time complexity of binary search?
   Binary search runs in O(log n) time because it halves the search space at every step. It requires the input data to be sorted. This makes it much faster than linear search for large sorted datasets.

5. What is a hash table?
   A hash table stores key-value pairs and uses a hash function to map keys to buckets. Average-case lookup, insertion, and deletion are usually O(1). Performance depends on a good hash function and effective collision handling.

6. What is the difference between a tree and a graph?
   A tree is a connected acyclic hierarchical structure with exactly one path between any two nodes. A graph is a more general structure made of vertices and edges and may contain cycles, disconnected components, or multiple paths between nodes.

7. What is a binary search tree?
   A binary search tree is a binary tree where values smaller than a node go to the left subtree and larger values go to the right subtree. This property allows efficient search, insert, and delete operations when the tree is balanced.

8. What is the difference between BFS and DFS?
   Breadth-first search explores nodes level by level and typically uses a queue. Depth-first search explores as far as possible along one branch before backtracking and typically uses recursion or a stack. BFS is useful for shortest paths in unweighted graphs, while DFS is useful for traversal and cycle-related problems.

9. What is dynamic programming?
   Dynamic programming is a technique for solving problems by breaking them into overlapping subproblems and storing intermediate results. It avoids repeated computation and is often used when a problem has optimal substructure and overlapping subproblems.

10. What is Big-O notation?
    Big-O notation describes the upper bound of an algorithm's growth rate as input size increases. It helps compare efficiency by focusing on how runtime or space scales rather than exact machine-dependent timings. Examples include O(1), O(log n), O(n), and O(n^2).

11. What is a greedy algorithm?
    A greedy algorithm makes the locally optimal choice at each step with the hope of reaching a global optimum. It works well for some problems like activity selection and Huffman coding, but it does not guarantee the best answer for every problem.

12. What is recursion?
    Recursion is a technique where a function solves a problem by calling itself on smaller instances of the same problem. A correct recursive solution needs a base case to stop and a recursive step that reduces the problem size.
