from models import *

def main():
    animal = Animal("Generic", 5, "Unknown")
    dog1 = Dog("Buddy", 3, "Labrador")
    dog2 = Dog("Rex", 2, "Beagle", trained=True)
    cat1 = Cat("Whiskers", 4, "Black")
    cat2 = Cat("Mittens", 1, "White")

    animals = [animal, dog1, dog2, cat1, cat2]

    for a in animals:
        print(a)
        print(a.info())
        print(a.speak())
        if isinstance(a, Dog):
            print(a.train())
        if isinstance(a, Cat):
            print(a.scratch())
        print("-" * 15)


if __name__ == "__main__":
    main()