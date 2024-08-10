// WRITE OPERATION
#include <stdio.h>
void main()
{
    FILE *fptr;

    fptr = fopen("test1.txt", "w");
    fprintf(fptr, "Hello World");
    fclose(fptr);
}

// APPEND OPERATION
#include <stdio.h>
void main()
{
    FILE *fptr;

    fptr = fopen("test1.txt", "a");
    fprintf(fptr, "THIS IS APPEND LINE.");
    fclose(fptr);
}

// READ OPERATION
#include <stdio.h>

void main()
{
    FILE *fptr;

    fptr = fopen("test1.txt", "r");
    char a[100], i;
    for (i = 0; i != '\0'; i++)
    {
        fgets(a, 100, fptr);
        printf("%s", a);
    }
    fclose(fptr);
}