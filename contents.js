const story = {
    headline: 'Maagiline taco',
    paths: [
        {
            id: 1,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a ipsum nunc. In rutrum ligula sed nibh pellentesque lacinia. Sed nec vulputate metus, at fringilla eros. Phasellus eu leo auctor, mattis ligula nec, fermentum neque. Nulla venenatis varius efficitur. Nam vitae placerat nisi, et efficitur leo. Nam ac lorem eu libero placerat gravida eget in risus. Fusce congue semper ipsum, at egestas felis aliquam vitae.\n' +
                '\n' +
                '            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec risus mauris, sodales et sem id, mollis lacinia massa. Donec malesuada ultricies elit, quis suscipit diam posuere eget. Pellentesque varius elit elit, molestie mattis mi malesuada sit amet. In at dictum magna, eu egestas neque. Fusce ultricies mattis ipsum, facilisis aliquet eros viverra vulputate. Donec elit mauris, tincidunt in mi vel, euismod suscipit est. Vivamus et posuere neque.\n' +
                '\n' +
                '            Cras rutrum ligula neque, et finibus nulla convallis eget. Praesent sit amet consequat elit, non consectetur augue. Integer dignissim iaculis diam, sed fringilla sem commodo et. Ut porttitor velit lectus, sit amet ullamcorper tellus viverra eu. In vehicula ligula sit amet erat aliquet mollis. Ut accumsan est purus, sed consectetur magna vulputate et. Morbi nec velit id nisl convallis ullamcorper sed ut tortor.\n' +
                '\n' +
                '            Vestibulum bibendum risus in sollicitudin mollis. Curabitur eget gravida ligula, at fermentum quam. Aenean vestibulum viverra ipsum, non eleifend magna dapibus hendrerit. Etiam facilisis consequat erat, sit amet sollicitudin nibh scelerisque at. Nulla rhoncus nulla a massa aliquam ornare. Morbi tincidunt pharetra enim in fringilla. Aliquam sed egestas est. Ut id lacus efficitur, consequat lorem in, pulvinar nulla. Maecenas vitae tellus diam. Proin at mauris neque. Sed egestas sem vel eros eleifend congue. Praesent id fringilla enim. Ut volutpat ligula fermentum enim imperdiet ultrices. In a dolor sodales, mattis risus quis, gravida tortor. Donec ultricies lacus urna, vitae venenatis purus lobortis ut.\n' +
                '\n' +
                '            Integer a fermentum ligula. Nulla gravida ante id magna ullamcorper, fringilla dignissim nisl faucibus. Duis semper bibendum risus et blandit. Nullam et lobortis augue. Nunc eget consequat ex, a varius lorem. Fusce accumsan mi quis est faucibus molestie. Aenean malesuada quam massa, eu dictum augue viverra sed.\n' +
                '\n' +
                '            Sed at diam a tortor mattis efficitur a a urna. Ut nec tincidunt enim. Curabitur dignissim id tellus eu ultricies. Cras eu arcu sit amet risus porta consectetur. Maecenas laoreet pharetra gravida. Curabitur porta quam vel lectus vestibulum, et semper diam rhoncus. Nam pretium commodo imperdiet. Etiam convallis tincidunt venenatis. Suspendisse id elit aliquam, eleifend ligula id, varius ex. Nam sit amet viverra ex. Nullam et tortor laoreet, mattis ligula et, mattis mauris.\n' +
                '\n' +
                '            Pellentesque egestas laoreet velit, at faucibus purus mollis vitae. Maecenas a tortor maximus mauris vehicula volutpat. Donec vitae ipsum gravida, lacinia turpis et, luctus nisl. Phasellus sollicitudin scelerisque semper. Aliquam erat volutpat. Donec eget mattis justo, vitae iaculis est. Proin non mauris eu leo posuere eleifend eu nec arcu. Fusce sed sapien id elit imperdiet scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque vulputate lorem a est pharetra, vel fringilla lectus condimentum.\n' +
                '\n' +
                '            Phasellus tellus augue, accumsan at lacus eget, bibendum sagittis neque. Nam sagittis eget orci quis posuere. Vivamus quis hendrerit justo, ac tempor purus. Praesent ut ullamcorper elit. Donec justo sapien, dictum non metus eu, eleifend maximus quam. Curabitur dapibus mauris enim. Nulla vulputate lacinia quam, ut finibus libero mattis quis. Nullam venenatis ultricies interdum. Maecenas pellentesque diam dolor, non finibus quam mollis vitae. Quisque porttitor a neque id malesuada. Sed blandit libero nulla, eu hendrerit erat tristique et. Sed eget volutpat nulla. Ut luctus arcu ut nunc dignissim, quis iaculis eros egestas. Duis quis tristique ante, non commodo lectus. Aenean ac lobortis elit.\n' +
                '\n' +
                '            Etiam quis vestibulum neque, non blandit turpis. Nulla euismod posuere ante eget porttitor. Integer in mi et odio interdum interdum sed ultrices dui. Proin sapien elit, lobortis at viverra non, sollicitudin bibendum sapien. Proin at mauris imperdiet, accumsan ipsum a, pharetra quam. Vivamus consequat neque non imperdiet interdum. Aliquam et feugiat tortor. Phasellus interdum magna a sollicitudin gravida. Nunc bibendum felis ligula, ac maximus orci tempus nec. Pellentesque sodales ultrices vehicula. Phasellus quis porttitor lorem. Mauris posuere elit sit amet velit aliquam, ac ornare elit mollis. Cras dapibus, eros at finibus ultricies, augue purus efficitur lacus, vel pulvinar elit erat eu diam. Maecenas sapien dolor, tempor eu mauris non, dignissim posuere massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque nulla ligula, elementum non nisl in, posuere sagittis ex.\n' +
                '\n' +
                '            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar dictum pellentesque. Sed vitae ante ut orci vestibulum venenatis sit amet ac nulla. Duis et neque venenatis, pulvinar nisl vitae, lacinia sem. Vestibulum ornare, nibh ut tristique facilisis, erat ipsum vehicula sem, sit amet faucibus ex ante at turpis. Donec laoreet, urna at placerat finibus, sapien dui lacinia mi, at volutpat purus urna sed velit. Sed posuere mi tortor, interdum tincidunt justo blandit id. Curabitur sed elit at tellus pulvinar dictum. Fusce vel aliquet ligula. Vestibulum faucibus maximus tellus, ut tempor dui pellentesque sit amet. Vestibulum nec porta odio. In sagittis massa eu lacus pretium luctus.\n' +
                '\n' +
                '            Nunc a rhoncus diam, eget fringilla nisi. Morbi in sapien et massa elementum ultricies. Morbi vitae augue lacus. Vivamus velit nunc, ullamcorper sit amet sollicitudin non, varius in nisl. Nunc ac mi luctus, efficitur ex vitae, pellentesque velit. Suspendisse mattis turpis libero, pulvinar commodo mauris imperdiet in. Nunc ut pretium turpis, quis tempor libero. Maecenas est dui, bibendum vel neque id, consequat suscipit arcu. Nam dignissim mauris lacus, sed commodo nisi tempor id.\n' +
                '\n' +
                '            Vivamus vehicula eget nunc at porta. Nam blandit rutrum turpis quis ornare. Donec sit amet magna imperdiet erat fringilla scelerisque quis sit amet eros. Curabitur sollicitudin bibendum varius. Ut congue non ex ac rutrum. Vestibulum sit amet orci lectus. Nullam molestie nec enim ac tempus.\n' +
                '\n' +
                '            Nunc molestie vel justo semper elementum. Phasellus sodales ipsum iaculis pellentesque bibendum. Vivamus ac mi nunc. Fusce luctus quam id purus sagittis, eget suscipit nibh dictum. Quisque euismod interdum suscipit. Sed lobortis eros sit amet urna gravida varius. Vestibulum metus lectus, posuere at viverra quis, placerat nec eros. Etiam placerat blandit lorem ut volutpat. Praesent elementum lacinia imperdiet. Quisque sodales ut tellus sed interdum. Nulla luctus sapien lobortis, gravida urna eget, venenatis nibh. Aliquam sed dictum odio, vel porttitor ante. Suspendisse nec lacus lectus. Vivamus nec enim tincidunt, tincidunt est vitae, imperdiet est. Duis eget malesuada augue, elementum venenatis libero.\n' +
                '\n' +
                '            Phasellus pellentesque, mauris aliquet facilisis feugiat, metus sem lobortis leo, non condimentum nisl elit at dolor. Integer et mollis diam. Praesent ut mi non ipsum ultrices vestibulum. Vestibulum suscipit lacinia odio. Nam eget facilisis est. Maecenas sit amet mauris sagittis, vulputate sem sit amet, egestas enim. Praesent et maximus lorem. In lacus dolor, convallis eu augue hendrerit, tristique interdum leo. Maecenas accumsan dolor ornare lacus ultrices, et aliquam enim porta. Sed pulvinar lacinia erat vitae ullamcorper. Vestibulum quis odio sapien. Donec malesuada eget lacus nec volutpat. In ligula diam, ultrices vel felis ut, mattis ultricies urna. Proin dapibus tellus in porta maximus.\n' +
                '\n' +
                '            Integer a faucibus magna. Cras id mi ut orci ornare pellentesque. Duis laoreet nunc quis nunc iaculis, vel vulputate purus tincidunt. Donec nunc nibh, auctor eu mattis in, consectetur at dolor. Sed mattis purus eros, ut imperdiet ipsum faucibus eu. Vestibulum convallis viverra augue at congue. Donec et malesuada felis. Nunc finibus risus condimentum nulla vulputate bibendum. Etiam id venenatis ex. Aliquam in ipsum auctor, aliquet dui quis, dictum lorem.\n' +
                '\n' +
                '            Nulla non massa fringilla, fermentum tellus vel, lobortis nulla. Ut ac enim et quam lobortis mattis at et lacus. Nulla in pharetra sem, in suscipit mauris. Aenean ac aliquet eros. Nunc imperdiet dolor nec laoreet porttitor. Duis vulputate non metus vel lacinia. Etiam euismod auctor enim a laoreet. Praesent tempor, neque in porta laoreet, ligula odio mollis libero, a fermentum libero ipsum at dui. Phasellus consequat ornare diam eu luctus. Vestibulum ut nisi auctor, tempus sem nec, finibus neque. Nam scelerisque massa nec justo accumsan commodo. Fusce faucibus venenatis maximus. Maecenas sit amet pellentesque enim, id commodo sem. Maecenas mauris nulla, feugiat sit amet velit id, vulputate condimentum diam.',
            images: [
                'tacoscared.jpg'
            ],
            buttons: [
                {
                    text: 'järgmine',
                    nextId: 2,
                    points: 30,
                },
                {
                    text: 'eelmine',
                    nextId: -1,
                },
            ]
        },
        {
            id: 2,
            content: 'Jõudsid metsa, kus näed üht kollast elundit. Tunned kohe ära, et temal maagilised võimed. Kas see tekst peab olema center aligned? See vist raamatu lugemiseks ei sobi.',
            images: [
                'tacoman.png',
                'tacotexas.jpg',
            ],
            buttons: [
                {
                    nextId: 3,
                    text: 'Teleporteeru algusesse tacoman jõuga!',
                    condition: function (points) {
                        console.log('Actually in here!');
                        console.log(points);
                        return points >= 30;
                    },
                    failId: 4,
                },
            ],
        },
        {
            id: 3,
            content: 'Rohkem või võrdne 30 punktiga',
            buttons: [],
        },
        {
            id: 4,
            content: 'Vähem kui 30 punkti',
            buttons: [],
        }
    ]
};

let currentId = 1;
let points = 0;

function getCurrentContent() {
    let result = null;

    story.paths.forEach((item, index) => {
        if (item.id === currentId) {
            result = item;
            return -1;
        }
    });

    return result;
}

function changeId(newId) {
    currentId = newId;
}

function addPoints(extraPoints) {
    points += extraPoints;
}