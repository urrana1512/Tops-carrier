#include<stdio.h>  

choice(){
    printf("\n1. Factorial");
    printf("\n2. Prime Number");
    printf("\n3. Fibonacci");
    printf("\n4. Odd-Even");
    printf("\n5. Exit");
}

factorial(){
    printf("\n------Welcome to Factorial------\n");
    int i, fac=1, n;

        printf("\nEnter the number : ");
        scanf("%d", &n);

        for(i=1; i<=n; i++){
            fac = fac * i;
        }
        printf("\nFactorial of %d is %d\n", n, fac);
    }

prime(){
    printf("\n------Welcome to Prime Number------\n");
    int n, i, c=0;
        printf("\nEnter number : ");
        scanf("%d", &n);

        for(i=1 ; i<=n ; i++){
            if(n%i == 0){
                c++;
            }
        }
        if(c==2){
            printf("%d is Prime.\n", n);
        }
        else{
            printf("%d is not Prime.\n", n);
        }
    }

fibonacci(){
    printf("\n------Welcome to Fibonacci Series------\n");
    int i, fTerm=0, sTerm=1, n, nexterm = fTerm + sTerm;

        printf("\nEnter Number : ");
        scanf("%d", &n);
    
        printf("%d\n%d\n", fTerm, sTerm);

        for(i=3 ; i<=n ; i++){
    	    printf("%d\n", nexterm);
    	    fTerm = sTerm;
    	    sTerm = nexterm;
            nexterm = fTerm + sTerm;
        }
    }

odd_even(){
    printf("\n------Welcome to Odd-Even------\n");
    int n;
    printf("\nEnter Integer : ");
    scanf("%d", &n);

    if(n % 2 == 0){
        printf("%d is Even.\n\n", n);
    }
    else{
        printf("%d is Odd.\n\n", n);
    }
}

int main(){
    while(1){
        printf("\n*********WELCOME*********\n");
        choice();

        int choice;
        printf("\n\nEnter Choice : ");
        scanf("%d", &choice);

        if(choice == 1){
            factorial();
        }

        else if(choice == 2){
           prime(); 
        }

        else if(choice == 3){
            fibonacci();
        }

        else if(choice == 4){
            odd_even();
        }

        else if(choice == 5){
            printf("\n******Thank You!!******\n");
            break;
        }

        else{
            printf("\n\nInvalid choice!!");
            break;
        }
    }
}