class Animal:
    def __init__(self, name, age, species):
        self.name = name
        self.age = age
        self.species = species
    
    def speak(self):
        retrurn "Some sound"
    
    def info(self):
        return f"{self.name} is a {self.age}-year-old {self.species}."

    def __str__(self):
        return f"Animal(name={self.name}, age={self.age}, species={self.species})"

class Dog(Animal):
    def __init__(self, name, age, breed, trained=False):
        super().__init__(name, age, species="Dog")
        self.breed = breed
        self.trained = trained

    def speak(self):
        return "Woof!"

    def train(self):
        self.trained = True
        return f"{self.name} is now trained!"

    def __str__(self):
        return f"Dog(name={self.name}, age={self.age}, breed={self.breed}, trained={self.trained})"

class Cat(Animal):
    def __init__(self, name, age, color):
        super().__init__(name, age, species="Cat")
        self.color = color

    def speak(self):
        return "Meow!"

    def scratch(self):
        return f"{self.name} scratches the furniture!"

    def __str__(self):
        return f"Cat(name={self.name}, age={self.age}, color={self.color})"