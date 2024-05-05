console.log("구구단 예제");
        var result=0;
        for(var i =2; i<=9;i++){
            console.log("======",i,"단======");
            for(var j =1;j<=10;j++){
                result = i*j;
                console.log(i+' * '+ j+" = " + result);
            }
        }//구구단

        console.log("1부터 99까지 2의 배수거나 3의 배수 총합");
        var n;    
        var sum=0;
        for(n=1; n<100;n++){
            if(n%2==0 || n%3==0){
                sum += n;
            }
        }
        console.log(sum);//2의 배수거나 3의 배수 총합

        console.log("up&down게임");
        function startGame() {
            const answer = Math.floor(Math.random() * 10)+1;
            while(1){
                const guessValue = prompt();
                if(Number(guessValue) == answer){
                    alert(answer+"!! 정답입니다!");
                    break;
                }else if(guessValue == 'q' || guessValue == '포기'){
                    alert("포기하셨습니다..");
                    break;
                }else if(Number(guessValue)>answer){
                    alert("Down");
                    continue;
                }else if(Number(guessValue)<answer){
                    alert("Up");
                    continue;
                }

            }
        }
        console.log(startGame());
        //up&down게임