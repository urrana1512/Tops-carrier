#include <iostream>
using namespace std;

template <typename T>
T max_value(T a, T b)
{
    if (a > b)
    {
        cout << "A is Greatest.\n";
    }
    else
    {
        cout << "B is Greatest.\n";
    }
}

main()
{
    max_value<int>(6, 4);
    max_value<char>('Udit', 'udit');
}
