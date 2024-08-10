#include<stdio.h>  

choice(){
    printf("\n1. String Length");
    printf("\n2. String Copy");
    printf("\n3. String Concate");
    printf("\n4. Exit");
}

str_len(){
    printf("\n------Find Length of String------\n");
    char a[4], i;
    int len=0;
    fflush(stdin);  // USED AGAINST BUFFER
    printf("Enter String : ");
    gets(a);

    for(i=0 ; a[i]!='\0' ; i++){
        len++;
    }
    printf("\nLength of String is : %d\n", len);
    }

str_cpy(){
    printf("\n------Copy string------\n");
    char a[4], b[4], i;

	fflush(stdin);  // USED AGAINST BUFFER
    printf("Enter the String : ");
    gets(a);

    for(i=0 ; a[i]!='\0' ; i++){
        b[i] = a[i];
    }
    b[i]='\0';
    printf("Copying String is : %s\n", b);
    }

str_cat(){
    printf("\n------Concate String------\n");
    char a[100], b[100], c[100];
    int i,j;

	fflush(stdin); // USED AGAINST BUFFER
    printf("Enter the String : ");
    gets(a);
    printf("Enter the String : ");
    gets(b);

    for(i=0 ; a[i]!='\0' ; i++){
     	c[i] = a[i];
	}
    for(j=0 ; b[j]!='\0' ; j++){
     	c[i] = b[j];
     	i++;
	}
    c[i]='\0';
    printf("Concate String is : %s\n", c);
    }

int main(){
    printf("\n*********WELCOME TO STRING DEPARTMENT*********\n");
    while(1){
        choice();

        int choice;
        printf("\n\nEnter Choice : ");
        scanf("%d", &choice);

        if(choice == 1){
            str_len();
        }

        else if(choice == 2){
           str_cpy();
        }

        else if(choice == 3){
            str_cat();
        }

        else if(choice == 4){
            printf("\n******Thank You!!******\n");
            break;
        }

        else{
            printf("\n\nInvalid choice!!");
            break;
        }
    }
}