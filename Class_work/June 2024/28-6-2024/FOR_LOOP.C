#include <stdio.h>
void main()
{
    int i;

    for (i = 1; i <= 10; i++)
    {
        printf("%d\n", i);
    }
}

// FACTORAL & SUM
#include <stdio.h>
void main()
{
    int i, n, fact = 1, sum = 0;

    printf("Enter the number : ");
    scanf("%d", &n);

    for (i = 1; i <= n; i++)
    {
        fact = fact * i;
        sum = sum + i;
    }
    printf("Factorial is : %d", fact);
    printf("\nSum is : %d", sum);
}

// PATTERN
#include <stdio.h>
void main()
{
    int i, j;

    for (i = 1; i <= 5; i++)
    { // ROW
        for (j = 1; j <= i; j++)
        { // COLUMN
            printf("*");
        }
        printf("\n");
    }
}

// REVERSE PATTERN
#include <stdio.h>
void main()
{
    int i, j;

    for (i = 1; i <= 5; i++)
    { // ROW
        for (j = i; j <= 5; j++)
        { // COLUMN
            printf("*");
        }
        printf("\n");
    }
}

// MIRROR PATTERN
#include <stdio.h>
void main()
{
    int i, j, k;

    for (i = 1; i <= 5; i++)
    { // row
        for (j = i; j <= 5; j++)
        { // column with space
            printf(" ");
        }
        for (k = 1; k <= i; k++)
        { // print star
            printf("*");
        }
        printf("\n");
    }
}
