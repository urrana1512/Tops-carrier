// 4th type of user define function : function with parameter & with return type
// Addition
#include <stdio.h>
add(int a, int b)
{
    return a + b;
}
factorial(int n)
{
    int i, fac = 1;
    for (i = 1; i <= n; i++)
    {
        fac = fac * i;
    }
    return fac;
}

void main()
{
    int a, b, n;
    printf("Enter A : ");
    scanf("%d", &a);
    printf("Enter B : ");
    scanf("%d", &b);
    printf("addition = %d", add(a, b));

    printf("Enter number : ");
    scanf("%d", &n);
    printf("factorial = %d", factorial(n));
}