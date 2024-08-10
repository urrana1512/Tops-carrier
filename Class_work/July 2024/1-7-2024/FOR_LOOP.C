// REVERSE PATTERN
#include <stdio.h>
void main()
{
    int i, j, k;

    for (i = 1; i <= 5; i++)
    {
        for (k = 1; k <= 5 - i; k++)
        {
            printf(" ");
        }
        for (j = 1; j <= i; j++)
        {
            printf("*");
        }
        printf("\n");
    }
}

// TRIANGLE
//       *
//      * *
//     * * *
//    * * * *
//   * * * * *
#include <stdio.h>
void main()
{
    int i, j, k;

    for (i = 1; i <= 5; i++)
    {
        for (k = 1; k <= 5 - i; k++)
        {
            printf(" ");
        }
        for (j = 1; j <= i; j++)
        {
            printf(" *"); // only difference is 1 space to convert mirror pattern to triangle
        }
        printf("\n");
    }
}

// ascii value pattern
#include <stdio.h>
void main()
{
    int n = 65, i, j;

    for (i = 1; i <= 5; i++)
    {
        for (j = 1; j <= i; j++)
        {
            printf("%c", n);
            n++;
        }
        printf("\n");
    }
}

#include <stdio.h>
void main()
{
    int i, j;

    for (i = 0; i < 5; i++)
    {
        for (j = 0; j <= i; j++)
        {
            printf(" %c", 'A' + j);
        }
        printf("\n");
    }
}