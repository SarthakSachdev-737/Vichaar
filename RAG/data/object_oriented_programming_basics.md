# Object Oriented Programming Basics Questions

1. What is object-oriented programming?
   Object-oriented programming is a programming paradigm based on objects that combine data and behavior. It organizes software around classes and instances rather than only functions and procedures. This helps model real-world entities and improve code structure.

2. What is a class and what is an object?
   A class is a blueprint that defines the properties and methods of a type of object. An object is an actual instance created from that class. Multiple objects can be created from the same class with different values.

3. What is encapsulation?
   Encapsulation is the practice of bundling data and the methods that operate on that data into a single unit, usually a class. It also involves restricting direct access to internal state and exposing controlled interfaces instead. This improves maintainability and protects invariants.

4. What is inheritance?
   Inheritance allows one class to acquire properties and methods from another class. The child or derived class can reuse and extend the behavior of the parent or base class. This promotes code reuse but should be used carefully to avoid overly tight coupling.

5. What is polymorphism?
   Polymorphism means the same interface can represent different underlying forms or behaviors. For example, different classes can implement a method with the same name in different ways. This allows flexible and extensible code.

6. What is abstraction?
   Abstraction means showing only the essential features of an object while hiding implementation details. It helps reduce complexity and lets programmers interact with high-level interfaces instead of low-level internals.

7. What is the difference between method overloading and method overriding?
   Method overloading means using the same method name with different parameter lists, usually within the same class. Method overriding means a subclass provides its own implementation of a method already defined in the parent class. Overriding supports runtime polymorphism.

8. What is a constructor?
   A constructor is a special method that initializes an object when it is created. It is commonly used to set initial values or prepare required resources. In many languages, constructors have the same name as the class or follow language-specific rules.

9. What is the difference between composition and inheritance?
   Inheritance models an "is-a" relationship, such as a `Car` being a kind of `Vehicle`. Composition models a "has-a" relationship, such as a `Car` having an `Engine`. Composition is often preferred because it gives more flexibility and looser coupling.

10. What is an interface?
    An interface defines a contract of methods that a class must implement without specifying the full internal behavior. It promotes loose coupling and allows unrelated classes to share a common API. Some languages also use abstract classes for similar purposes.

11. What is access control in OOP?
    Access control determines which parts of a class can be accessed from outside or from subclasses. Common access modifiers include public, private, and protected. They help enforce encapsulation and protect internal implementation details.

12. Why is OOP useful?
    OOP helps organize complex code by grouping related data and behavior together. It improves readability, reuse, testing, and maintainability, especially in large systems. It is particularly useful when software naturally involves interacting entities and responsibilities.
