#include<stdio.h>
void main(){
    char n;

    printf("Enter Character : ");
    scanf("%c", &n);

    switch(n){
        case 'A':
            printf("%c is Vowel", n);
            break;
        case 'a':
            printf("%c is Vowel", n);
            break;
        case 'E':
            printf("%c is Vowel", n);
            break;
        case 'e':
            printf("%c is Vowel", n);
            break;
        case 'I':
            printf("%c is Vowel", n);
            break;
        case 'i':
            printf("%c is Vowel", n);
            break;
        case 'O':
            printf("%c is Vowel", n);
            break;
        case 'o':
            printf("%c is Vowel", n);
            break;
        case 'U':
            printf("%c is Vowel", n);
            break;
        case 'u':
            printf("%c is Vowel", n);
            break;

            default:{
                printf("%c is Consonant.", n);
            }
    }
}