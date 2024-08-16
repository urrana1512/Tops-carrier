#include <iostream>
using namespace std;

class Parts
{
public:
    virtual wheel() = 0;
    virtual colour() = 0;
};

class Truck : public Parts
{
public:
    wheel()
    {
        cout << "Truck has 6 tiers.";
    }
    colour()
    {
        cout << "Truck has Brown Colour.";
    }
};

class Car : public Parts
{
public:
    wheel()
    {
        cout << "Car has 4 tiers.";
    }
    colour()
    {
        cout << "Car has Blue Colour.";
    }
};

class Rikshaw : public Parts
{
public:
    wheel()
    {
        cout << "Rikshaw has 3 tiers.";
    }
    colour()
    {
        cout << "Rikshaw has Yellow Colour.";
    }
};

class Bike : public Parts
{
public:
    wheel()
    {
        cout << "Bike has 2 tiers.";
    }
    colour()
    {
        cout << "Bike has Black Colour.";
    }
};

main()
{
    // Truck
    Truck obj;
    obj.wheel();
    obj.colour();

    // Car
    Car obj1;
    obj1.wheel();
    obj1.colour();

    // Rikshaw
    Rikshaw obj2;
    obj2.wheel();
    obj2.colour();

    // Bike
    Bike obj3;
    obj3.wheel();
    obj3.colour();
}
