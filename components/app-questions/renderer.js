var questionsTemplate = require('./template.marko');
var EventEmitter = require('events').EventEmitter;
var _ = require('underscore');

function getForm(id) {
    var source = [
        {
            q1: {
                type: 'app-shorttext',
                question: 'Q1 Type away on your keyboard',
                okButtonValue: 'Vale',
                id: 'q1'
            },
            q2: {
                type: 'app-shorttext',
                question: 'Q2 answer this one again',
                okButtonValue: 'OK',
                id: 'q2'
            },
            q3: {
                type: 'app-shorttext',
                question: 'Q3 Last other one',
                okButtonValue: 'Sure',
                id: 'q3'
            }
        },
        {
            q4: {
                type: 'app-shorttext',
                question: 'Q4 press hard those keys',
                okButtonValue: 'Vale',
                id: 'q4'
            },
            q5: {
                type: 'app-shorttext',
                question: 'Q5 you know what I mean',
                okButtonValue: 'OK',
                id: 'q5'
            },
            q6: {
                type: 'app-shorttext',
                question: 'Q6 big bottoms',
                okButtonValue: 'Sure',
                id: 'q6'
            }
        },
        {
            q7: {
                type: 'app-shorttext',
                question: 'Q7 press hard those keys',
                okButtonValue: 'Vale',
                id: 'q7'
            },
            q8: {
                type: 'app-shorttext',
                question: 'Q8 you know what I mean',
                okButtonValue: 'OK',
                id: 'q8'
            }
        },
        {
            q9: {
                type: 'app-shorttext',
                question: 'q9 big bottoms',
                okButtonValue: 'Sure',
                id: 'q9'
            }
        },
        {
            q1: {
                type: 'app-shorttext',
                question: 'Q1 Type away on your keyboard',
                okButtonValue: 'Vale',
                id: 'q1'
            },
            q2: {
                type: 'app-shorttext',
                question: 'Q2 answer this one again',
                okButtonValue: 'OK',
                id: 'q2'
            },
            q3: {
                type: 'app-shorttext',
                question: 'Q3 Last other one',
                okButtonValue: 'Sure',
                id: 'q3'
            }
        },
        {
            q4: {
                type: 'app-shorttext',
                question: 'Q4 press hard those keys',
                okButtonValue: 'Vale',
                id: 'q4'
            },
            q5: {
                type: 'app-shorttext',
                question: 'Q5 you know what I mean',
                okButtonValue: 'OK',
                id: 'q5'
            },
            q6: {
                type: 'app-shorttext',
                question: 'Q6 big bottoms',
                okButtonValue: 'Sure',
                id: 'q6'
            }
        },
        {
            q7: {
                type: 'app-shorttext',
                question: 'Q7 press hard those keys',
                okButtonValue: 'Vale',
                id: 'q7'
            },
            q8: {
                type: 'app-shorttext',
                question: 'Q8 you know what I mean',
                okButtonValue: 'OK',
                id: 'q8'
            }
        },
        {
            q9: {
                type: 'app-shorttext',
                question: 'q9 big bottoms',
                okButtonValue: 'Sure',
                id: 'q9'
            }
        },
        {
            q1: {
                type: 'app-shorttext',
                question: 'Q1 Type away on your keyboard',
                okButtonValue: 'Vale',
                id: 'q1'
            },
            q2: {
                type: 'app-shorttext',
                question: 'Q2 answer this one again',
                okButtonValue: 'OK',
                id: 'q2'
            },
            q3: {
                type: 'app-shorttext',
                question: 'Q3 Last other one',
                okButtonValue: 'Sure',
                id: 'q3'
            }
        },
        {
            q4: {
                type: 'app-shorttext',
                question: 'Q4 press hard those keys',
                okButtonValue: 'Vale',
                id: 'q4'
            },
            q5: {
                type: 'app-shorttext',
                question: 'Q5 you know what I mean',
                okButtonValue: 'OK',
                id: 'q5'
            },
            q6: {
                type: 'app-shorttext',
                question: 'Q6 big bottoms',
                okButtonValue: 'Sure',
                id: 'q6'
            }
        },
        {
            q7: {
                type: 'app-shorttext',
                question: 'Q7 press hard those keys',
                okButtonValue: 'Vale',
                id: 'q7'
            },
            q8: {
                type: 'app-shorttext',
                question: 'Q8 you know what I mean',
                okButtonValue: 'OK',
                id: 'q8'
            }
        },
        {
            q9: {
                type: 'app-shorttext',
                question: 'q9 big bottoms',
                okButtonValue: 'Sure',
                id: 'q9'
            }
        },
        {
            q1: {
                type: 'app-shorttext',
                question: 'Q1 Type away on your keyboard',
                okButtonValue: 'Vale',
                id: 'q1'
            },
            q2: {
                type: 'app-shorttext',
                question: 'Q2 answer this one again',
                okButtonValue: 'OK',
                id: 'q2'
            },
            q3: {
                type: 'app-shorttext',
                question: 'Q3 Last other one',
                okButtonValue: 'Sure',
                id: 'q3'
            }
        },
        {
            q4: {
                type: 'app-shorttext',
                question: 'Q4 press hard those keys',
                okButtonValue: 'Vale',
                id: 'q4'
            },
            q5: {
                type: 'app-shorttext',
                question: 'Q5 you know what I mean',
                okButtonValue: 'OK',
                id: 'q5'
            },
            q6: {
                type: 'app-shorttext',
                question: 'Q6 big bottoms',
                okButtonValue: 'Sure',
                id: 'q6'
            }
        },
        {
            q7: {
                type: 'app-shorttext',
                question: 'Q7 press hard those keys',
                okButtonValue: 'Vale',
                id: 'q7'
            },
            q8: {
                type: 'app-shorttext',
                question: 'Q8 you know what I mean',
                okButtonValue: 'OK',
                id: 'q8'
            }
        },
        {
            q9: {
                type: 'app-shorttext',
                question: 'q9 big bottoms',
                okButtonValue: 'Sure',
                id: 'q9'
            }
        },
        {
            q1: {
                type: 'app-shorttext',
                question: 'Q1 Type away on your keyboard',
                okButtonValue: 'Vale',
                id: 'q1'
            },
            q2: {
                type: 'app-shorttext',
                question: 'Q2 answer this one again',
                okButtonValue: 'OK',
                id: 'q2'
            },
            q3: {
                type: 'app-shorttext',
                question: 'Q3 Last other one',
                okButtonValue: 'Sure',
                id: 'q3'
            }
        },
        {
            q4: {
                type: 'app-shorttext',
                question: 'Q4 press hard those keys',
                okButtonValue: 'Vale',
                id: 'q4'
            },
            q5: {
                type: 'app-shorttext',
                question: 'Q5 you know what I mean',
                okButtonValue: 'OK',
                id: 'q5'
            },
            q6: {
                type: 'app-shorttext',
                question: 'Q6 big bottoms',
                okButtonValue: 'Sure',
                id: 'q6'
            }
        },
        {
            q7: {
                type: 'app-shorttext',
                question: 'Q7 press hard those keys',
                okButtonValue: 'Vale',
                id: 'q7'
            },
            q8: {
                type: 'app-shorttext',
                question: 'Q8 you know what I mean',
                okButtonValue: 'OK',
                id: 'q8'
            }
        },
        {
            q9: {
                type: 'app-shorttext',
                question: 'q9 big bottoms',
                okButtonValue: 'Sure',
                id: 'q9'
            }
        },
        {
            q1: {
                type: 'app-shorttext',
                question: 'Q1 Type away on your keyboard',
                okButtonValue: 'Vale',
                id: 'q1'
            },
            q2: {
                type: 'app-shorttext',
                question: 'Q2 answer this one again',
                okButtonValue: 'OK',
                id: 'q2'
            },
            q3: {
                type: 'app-shorttext',
                question: 'Q3 Last other one',
                okButtonValue: 'Sure',
                id: 'q3'
            }
        },
        {
            q4: {
                type: 'app-shorttext',
                question: 'Q4 press hard those keys',
                okButtonValue: 'Vale',
                id: 'q4'
            },
            q5: {
                type: 'app-shorttext',
                question: 'Q5 you know what I mean',
                okButtonValue: 'OK',
                id: 'q5'
            },
            q6: {
                type: 'app-shorttext',
                question: 'Q6 big bottoms',
                okButtonValue: 'Sure',
                id: 'q6'
            }
        },
        {
            q7: {
                type: 'app-shorttext',
                question: 'Q7 press hard those keys',
                okButtonValue: 'Vale',
                id: 'q7'
            },
            q8: {
                type: 'app-shorttext',
                question: 'Q8 you know what I mean',
                okButtonValue: 'OK',
                id: 'q8'
            }
        },
        {
            q9: {
                type: 'app-shorttext',
                question: 'q9 big bottoms',
                okButtonValue: 'Sure',
                id: 'q9'
            }
        },
        {
            q1: {
                type: 'app-shorttext',
                question: 'Q1 Type away on your keyboard',
                okButtonValue: 'Vale',
                id: 'q1'
            },
            q2: {
                type: 'app-shorttext',
                question: 'Q2 answer this one again',
                okButtonValue: 'OK',
                id: 'q2'
            },
            q3: {
                type: 'app-shorttext',
                question: 'Q3 Last other one',
                okButtonValue: 'Sure',
                id: 'q3'
            }
        },
        {
            q4: {
                type: 'app-shorttext',
                question: 'Q4 press hard those keys',
                okButtonValue: 'Vale',
                id: 'q4'
            },
            q5: {
                type: 'app-shorttext',
                question: 'Q5 you know what I mean',
                okButtonValue: 'OK',
                id: 'q5'
            },
            q6: {
                type: 'app-shorttext',
                question: 'Q6 big bottoms',
                okButtonValue: 'Sure',
                id: 'q6'
            }
        },
        {
            q7: {
                type: 'app-shorttext',
                question: 'Q7 press hard those keys',
                okButtonValue: 'Vale',
                id: 'q7'
            },
            q8: {
                type: 'app-shorttext',
                question: 'Q8 you know what I mean',
                okButtonValue: 'OK',
                id: 'q8'
            }
        },
        {
            q9: {
                type: 'app-shorttext',
                question: 'q9 big bottoms',
                okButtonValue: 'Sure',
                id: 'q9'
            }
        },
        {
            q1: {
                type: 'app-shorttext',
                question: 'Q1 Type away on your keyboard',
                okButtonValue: 'Vale',
                id: 'q1'
            },
            q2: {
                type: 'app-shorttext',
                question: 'Q2 answer this one again',
                okButtonValue: 'OK',
                id: 'q2'
            },
            q3: {
                type: 'app-shorttext',
                question: 'Q3 Last other one',
                okButtonValue: 'Sure',
                id: 'q3'
            }
        },
        {
            q4: {
                type: 'app-shorttext',
                question: 'Q4 press hard those keys',
                okButtonValue: 'Vale',
                id: 'q4'
            },
            q5: {
                type: 'app-shorttext',
                question: 'Q5 you know what I mean',
                okButtonValue: 'OK',
                id: 'q5'
            },
            q6: {
                type: 'app-shorttext',
                question: 'Q6 big bottoms',
                okButtonValue: 'Sure',
                id: 'q6'
            }
        },
        {
            q7: {
                type: 'app-shorttext',
                question: 'Q7 press hard those keys',
                okButtonValue: 'Vale',
                id: 'q7'
            },
            q8: {
                type: 'app-shorttext',
                question: 'Q8 you know what I mean',
                okButtonValue: 'OK',
                id: 'q8'
            }
        },
        {
            q9: {
                type: 'app-shorttext',
                question: 'q9 big bottoms',
                okButtonValue: 'Sure',
                id: 'q9'
            }
        },
        {
            q1: {
                type: 'app-shorttext',
                question: 'Q1 Type away on your keyboard',
                okButtonValue: 'Vale',
                id: 'q1'
            },
            q2: {
                type: 'app-shorttext',
                question: 'Q2 answer this one again',
                okButtonValue: 'OK',
                id: 'q2'
            },
            q3: {
                type: 'app-shorttext',
                question: 'Q3 Last other one',
                okButtonValue: 'Sure',
                id: 'q3'
            }
        },
        {
            q4: {
                type: 'app-shorttext',
                question: 'Q4 press hard those keys',
                okButtonValue: 'Vale',
                id: 'q4'
            },
            q5: {
                type: 'app-shorttext',
                question: 'Q5 you know what I mean',
                okButtonValue: 'OK',
                id: 'q5'
            },
            q6: {
                type: 'app-shorttext',
                question: 'Q6 big bottoms',
                okButtonValue: 'Sure',
                id: 'q6'
            }
        },
        {
            q7: {
                type: 'app-shorttext',
                question: 'Q7 press hard those keys',
                okButtonValue: 'Vale',
                id: 'q7'
            },
            q8: {
                type: 'app-shorttext',
                question: 'Q8 you know what I mean',
                okButtonValue: 'OK',
                id: 'q8'
            }
        },
        {
            q9: {
                type: 'app-shorttext',
                question: 'q9 big bottoms',
                okButtonValue: 'Sure',
                id: 'q9'
            }
        },
        {
            q1: {
                type: 'app-shorttext',
                question: 'Q1 Type away on your keyboard',
                okButtonValue: 'Vale',
                id: 'q1'
            },
            q2: {
                type: 'app-shorttext',
                question: 'Q2 answer this one again',
                okButtonValue: 'OK',
                id: 'q2'
            },
            q3: {
                type: 'app-shorttext',
                question: 'Q3 Last other one',
                okButtonValue: 'Sure',
                id: 'q3'
            }
        },
        {
            q4: {
                type: 'app-shorttext',
                question: 'Q4 press hard those keys',
                okButtonValue: 'Vale',
                id: 'q4'
            },
            q5: {
                type: 'app-shorttext',
                question: 'Q5 you know what I mean',
                okButtonValue: 'OK',
                id: 'q5'
            },
            q6: {
                type: 'app-shorttext',
                question: 'Q6 big bottoms',
                okButtonValue: 'Sure',
                id: 'q6'
            }
        },
        {
            q7: {
                type: 'app-shorttext',
                question: 'Q7 press hard those keys',
                okButtonValue: 'Vale',
                id: 'q7'
            },
            q8: {
                type: 'app-shorttext',
                question: 'Q8 you know what I mean',
                okButtonValue: 'OK',
                id: 'q8'
            }
        },
        {
            q9: {
                type: 'app-shorttext',
                question: 'q9 big bottoms',
                okButtonValue: 'Sure',
                id: 'q9'
            }
        },
        {
            q1: {
                type: 'app-shorttext',
                question: 'Q1 Type away on your keyboard',
                okButtonValue: 'Vale',
                id: 'q1'
            },
            q2: {
                type: 'app-shorttext',
                question: 'Q2 answer this one again',
                okButtonValue: 'OK',
                id: 'q2'
            },
            q3: {
                type: 'app-shorttext',
                question: 'Q3 Last other one',
                okButtonValue: 'Sure',
                id: 'q3'
            }
        },
        {
            q4: {
                type: 'app-shorttext',
                question: 'Q4 press hard those keys',
                okButtonValue: 'Vale',
                id: 'q4'
            },
            q5: {
                type: 'app-shorttext',
                question: 'Q5 you know what I mean',
                okButtonValue: 'OK',
                id: 'q5'
            },
            q6: {
                type: 'app-shorttext',
                question: 'Q6 big bottoms',
                okButtonValue: 'Sure',
                id: 'q6'
            }
        },
        {
            q7: {
                type: 'app-shorttext',
                question: 'Q7 press hard those keys',
                okButtonValue: 'Vale',
                id: 'q7'
            },
            q8: {
                type: 'app-shorttext',
                question: 'Q8 you know what I mean',
                okButtonValue: 'OK',
                id: 'q8'
            }
        },
        {
            q9: {
                type: 'app-shorttext',
                question: 'q9 big bottoms',
                okButtonValue: 'Sure',
                id: 'q9'
            }
        },
    ];
    console.log('fetch set of questions', id, source[id]);
    return source[id] || null;
}

function prepareTemplates(form) {
    var prepared = [];
    _.each(form, function(question) {
        var questionTemplate = require('../' + question.type + '/template.marko');
        question.template = questionTemplate;
        prepared.push(question);
    });

    return prepared;
}

function renderOnlyQuestions(questions, res) {
    questionsTemplate.render({
        questions: questions
    }, res);
    res.flush();
}

function getQuestions() {
    var ee = new EventEmitter();
    var questionsSetIndex = 0;

    function getNextSet() {
        var items = getForm(questionsSetIndex);
        if (items) {
            ee.emit('data', items);
            questionsSetIndex++;
            setTimeout(getNextSet, 1000);
        } else {
            ee.emit('end');
        }
    }

    process.nextTick(getNextSet);

    return ee;
}

module.exports = function(input, out) {
    // Begin an async fragment that we will asynchronously render
    // the search results to. When there is no more data we will
    // end the async fragment and that will end the HTML stream.
    var asyncOut = out.beginAsync({
        timeout: 0 /* disable the timeout */
    });

    var questionsStream = getQuestions();

    questionsStream
        .on('data', function(questions) {
            questions = prepareTemplates(questions);
            renderOnlyQuestions(questions, asyncOut);
        })
        .on('end', function() {
            console.log('end stream');
            asyncOut.end();
        });
};
