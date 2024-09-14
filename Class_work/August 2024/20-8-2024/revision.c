// Factorial in C language

#include <stdio.h>
void main()
{
    int n, fac = 1, result = 0;

    printf("Enter Nuumber : ");
    scanf("%d", &n);

    if (n == 0 || n == 1)
    {
        return 1;
    }
    else
    {
        result = n * fac(n - 1);
    }

    printf("Factorial : %d", result);
}

// Prime Number in C language
#include <stdio.h>
main()
{
    int i, j;
    int n1, n2;

    //	pri/ntf("Enter n1, n2 : ");
    //	scanf("%d\n%d", &n1, &n2);
    for (i = 1; i <= 50; i++)
    {
        for (j = 2; j <= i; j++)
        {
            if (i % j == 0)
                break;
        }
        if (i == j)
        {
            printf("%d ", j);
        }
    }
}