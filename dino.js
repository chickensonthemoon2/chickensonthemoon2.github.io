var pages = [{
  'question': 'Which colour?',
  'background':'potato.png',
  'answer' : {
    'Purple':{
      'PurpleDino':10, 'UniDino':4, 'EvilDino':5, 'RandomDino':2, 'WetDino':5
    },
    'Green':{
      'PurpleDino':2, 'UniDino':4, 'EvilDino':3, 'RandomDino':5, 'WetDino':4
    },
    'Blue':{
      'PurpleDino':5, 'UniDino':4, 'EvilDino':2, 'RandomDino':5, 'WetDino':10
    }
  }
},

{
  'question': 'Do you like pineapples?',
  'background':'cheese.jpg',
  'answer' : {
    'Yes':{
      'PurpleDino':5, 'UniDino':4, 'EvilDino':0, 'RandomDino':10, 'WetDino':2
    },
    'No':{
      'PurpleDino':5, 'UniDino':6, 'EvilDino':10, 'RandomDino':0, 'WetDino':8
    },
    'Kinda':{
      'PurpleDino':10, 'UniDino':5, 'EvilDino':0, 'RandomDino':0, 'WetDino':2
    }
  }
},

{
  'question': 'What is your favourite lesson at school?',
  'background':'unicorn.jpg',
  'answer' : {
    'Maths':{
      'PurpleDino':8, 'UniDino':7, 'EvilDino':2, 'RandomDino':5, 'WetDino':3
    },
    'PE':{
      'PurpleDino':2, 'UniDino':4, 'EvilDino':2, 'RandomDino':5, 'WetDino':3
    },
    'I hate school':{
      'PurpleDino':2, 'UniDino':0, 'EvilDino':10, 'RandomDino':5, 'WetDino':8
    }
  }
},

{
  'question': 'What is your favourite food?',
  'background':'tree.jpg',
  'answer' : {
    'Curry':{
      'PurpleDino':7, 'UniDino':7, 'EvilDino':8, 'RandomDino':3, 'WetDino':5
    },
    'Pizza':{
      'PurpleDino':5, 'UniDino':7, 'EvilDino':1, 'RandomDino':3, 'WetDino':4
    },
    'Yummy food':{
      'PurpleDino':10, 'UniDino':10, 'EvilDino':1, 'RandomDino':9, 'WetDino':5
    }
  }
},

{
  'question': 'Which animals?',
  'background':'lemon.jpg',
  'answer' : {
    'Unicorns':{
      'PurpleDino':8, 'UniDino':10, 'EvilDino':0, 'RandomDino':6, 'WetDino':4
    },
    'Black Cats':{
      'PurpleDino':1, 'UniDino':2, 'EvilDino':9, 'RandomDino':5, 'WetDino':2
    },
    'Dolphins':{
      'PurpleDino':8, 'UniDino':9, 'EvilDino':1, 'RandomDino':8, 'WetDino':10
    }
  }
},

{
  'question': 'Which sky object?',
  'background':'cow.jpg',
  'answer' : {
    'Rainbows':{
      'PurpleDino':7, 'UniDino':9, 'EvilDino':0, 'RandomDino':5, 'WetDino':5
    },
    'The Sun':{
      'PurpleDino':5, 'UniDino':7, 'EvilDino':4, 'RandomDino':8, 'WetDino':0
    },
    'Rain':{
      'PurpleDino':1, 'UniDino':2, 'EvilDino':9, 'RandomDino':4, 'WetDino':10
    }
  }
},

{
  'question': 'Do you say random words?',
  'background':'milk.gif',
  'answer' : {
    'Yes':{
      'PurpleDino':4, 'UniDino':5, 'EvilDino':3, 'RandomDino':8, 'WetDino':2
    },
    'No':{
      'PurpleDino':6, 'UniDino':5, 'EvilDino':7, 'RandomDino':2, 'WetDino':8
    },
    'POTATOES!':{
      'PurpleDino':7, 'UniDino':6, 'EvilDino':2, 'RandomDino':10, 'WetDino':2
    }
  }
},

{
  'question': 'Which?',
  'background':'smileyface.jpg',
  'answer' : {
    'Air':{
      'PurpleDino':8, 'UniDino':9, 'EvilDino':2, 'RandomDino':5, 'WetDino':5
    },
    'Water':{
      'PurpleDino':6, 'UniDino':5, 'EvilDino':1, 'RandomDino':5, 'WetDino':10
    },
    'Lava (Evil laugh)':{
      'PurpleDino':2, 'UniDino':1, 'EvilDino':10, 'RandomDino':2, 'WetDino':0
    }
  }
},

{
  'question': 'What are you on whichunicorn.com?',
  'background':'block.jpg',
  'answer' : {
    'Not done it yet':{
      'PurpleDino':5, 'UniDino':0, 'EvilDino':10, 'RandomDino':5, 'WetDino':5
    },
    'Ninjacorn':{
      'PurpleDino':5, 'UniDino':9, 'EvilDino':4, 'RandomDino':7, 'WetDino':3
    },
    'Other':{
      'PurpleDino':5, 'UniDino':9, 'EvilDino':1, 'RandomDino':5, 'WetDino':5
    }
  }
},

{
  'question': 'Are you a unicorn?',
  'background':'human.jpg',
  'answer' : {
    'Yes':{
      'PurpleDino':5, 'UniDino':10, 'EvilDino':0, 'RandomDino':6, 'WetDino':7
    },
    'No':{
      'PurpleDino':5, 'UniDino':0, 'EvilDino':10, 'RandomDino':4, 'WetDino':3
    },
    'I want to be':{
      'PurpleDino':5, 'UniDino':9, 'EvilDino':1, 'RandomDino':5, 'WetDino':5
    }
  }
},

];


var currentQ=null;

$('#orange').click(function(){
  butwer(0);
});

$('#green').click(function(){
  if(currentQ===null){
    currentQ=0;
    showQuestion(0);
  }
  else {
    butwer(1)
  };
});

$('#blue').click(function(){
  butwer(2);
});

function butwer(answerNo){
  //iloveunicicorns DO DA SCORES
  currentQ=currentQ+1;
  showQuestion(currentQ);
}

function showQuestion(questionNo){
  var cheeseyPic=pages[questionNo].background;
  $('body').css('background',  'url(\'images/backgrounds/'+ cheeseyPic +'\')');
  $('body').css('background-size', 'cover');
  $('body').css('background-repeat', 'none');
  $('body').css('background-position', 'center top');
  $('#Q').text(pages[questionNo].question);

  var answers=pages[questionNo].answer;
  var answerText=Object.keys(answers)
  $('#orange').text(answerText[0]);
  $('#green').text(answerText[1]);
  $('#blue').text(answerText[2]);

  $('#potato').text('Which Dino?');
  $('#orange').show();
  $('#blue').show();
}
