// IN-BUILT METHODS
// Length of string
#include <stdio.h>
#include <string.h>
void main()
{
    char a[10];

    printf("Enter string : ");
    gets(a); // work like scanf();

    printf("Length of String is : %d", strlen(a)); // strlen() is used to define lengtgh of string
}

// copy string to another
#include <stdio.h>
#include <string.h>
void main()
{
    char a[10], b[10];

    printf("Enter string : ");
    gets(a); // work like scanf();

    strcpy(b, a);
    printf("String number 2 is : %s", b); // strcpy() is used to define copy one string to another
}

// conacate string
#include <stdio.h>
#include <string.h>
void main()
{
    char a[10], b[10];

    printf("Enter string 1 : ");
    gets(a); // work like scanf();
    printf("Enter string 2 : ");
    gets(b); // work like scanf();

    printf("Merging String is : %s", strcat(a, b)); // strcat() is used to merging 2 strings
}

// comparision string
#include <stdio.h>
#include <string.h>
void main()
{
    char a[10], b[10];

    printf("Enter string 1 : ");
    gets(a); // work like scanf();
    printf("Enter string 2 : ");
    gets(b); // work like scanf();

    printf("String comparision is : %d", strcmp(a, b)); // strcmp() is used to compare 2 string based on their ascii value
}

// WITHOUT USING IN-BUILT METHOD
// find length of strings
#include <stdio.h>
void main()
{
    char a[4], i, len = 0;
    printf("Enter String : ");
    gets(a);

    for (i = 0; a[i] != '\0'; i++)
    {
        len++;
    }
    printf("\nLength of String is : %d", len);
}

// Compare without in-built mathod
#include <stdio.h>
void main()
{
    char a[10], b[10], i, j;
    int sum = 0, sum1 = 0;

    printf("Enter String : ");
    gets(a);
    printf("Enter String : ");
    gets(b);

    for (i = 0; a[i] != '\0'; i++)
    {
        sum = sum + a[i];
    }
    printf("Value : %d", sum);
    for (j = 0; b[j] != '\0'; j++)
    {
        sum1 = sum1 + b[j];
    }
    printf("Value : %d", sum1);

    strcmp(a, b);

    printf("Compare String : %d", strcmp(a, b));
}