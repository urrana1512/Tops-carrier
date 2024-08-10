// COPYING STRING WITHOUT USING IN-BUILT METHOD
#include <stdio.h>
void main()
{
    char a[4], b[4], i;

    printf("Enter the String : ");
    gets(a);

    for (i = 0; a[i] != '\0'; i++)
    {
        b[i] = a[i];
    }
    b[i] = '\0';
    printf("Copying String is : %s", b);
}

// CONCATE STRING WITHOUT USING IN-BUILT METHOD
#include <stdio.h>
#include <string.h>
void main()
{
    char a[100], b[100], c[100];
    int i, j;

    printf("Enter the String : ");
    gets(a);
    printf("Enter the String : ");
    gets(b);

    for (i = 0; a[i] != '\0'; i++)
    {
        c[i] = a[i];
    }
    for (j = 0; b[j] != '\0'; j++)
    {
        c[i] = b[j];
        i++;
    }
    c[i] = '\0';

    //    c[4] = a[4] + b[4];
    printf("Concate String is : %s", c);
}