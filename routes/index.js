var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
})

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/info/:id', function(req, res, next) {
    var id = req.param('id');

    if (!isNaN(id)) {
        request.post({url: 'http://api.iimovie.cc/vodapi.html', form: {data: '{"Action":"GetMovieInfo","Message":{"MovieID":"'+ id +'"}}'}}, function(error, response, body) {
            if (!error && response.statusCode == 200) {

                var result = JSON.parse(body);
                res.json(result);
            }
        });
    }

});
router.get('/page/:page', function(req, res, next) {
    var page = req.param('page');

    if (!isNaN(page)) {
        request.post({url: 'http://api.iimovie.cc/vodapi.html', form: {data:'{"Action":"GetMovies","Message":{"PageIndex":"' + page + '","PageSize":"12","Type":"1","ID":[-1],"Data":""}}'}}, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                var result = JSON.parse(body);
                res.json(result);
            }
        });
    }

});

// 获取所有种类
router.get('/categories', function(req, res, next) {
    var page = req.query.page;
    var size = req.query.size;

    if (page == null) {
        page = 1;
    }

    if (size == null) {
        size = 12;
    }

    request.post({url: 'http://api.iimovie.cc/vodapi.html', form: {data:'{"Action":"GetClass2","Message":{"PageIndex":"' + page + '","PageSize":"' + size + '"}}'}}, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var result = JSON.parse(body);
            res.json(result);
        }
    }); 
});
// 对应种类
router.get('/category/:id', function(req, res, next) {
    var id = req.param('id');
    var page = req.query.page;
    var size = req.query.size;

    if (page == null) {
        page = 1;
    }

    if (size == null) {
        size = 12;
    }
    if (!isNaN(id)) {
        if (id === 1) {
           request.post({url: 'http://api.iimovie.cc/vodapi.html', form: {data:'{"Action":"GetMovies","Message":{"PageIndex":"' + page + '","PageSize":"' + size + '","Type":"1","ID":[-1],"Data":""}}'}}, function(error, response, body) {
               if (!error && response.statusCode == 200) {
                   var result = JSON.parse(body);
                   res.json(result);
               } 
           }); 
        } else {
            request.post({url: 'http://api.iimovie.cc/vodapi.html', form: {data:'{"Action":"GetMovies","Message":{"PageIndex":"' + page + '","PageSize":"' + size + '","Type":"2","ID":[' + id + '],"Data":""}}'}}, function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    var result = JSON.parse(body);
                    res.json(result);
                }
            });
        }
        
    }
});

/* BILIBILI API */
router.get('/login', function(req, res, next) {
    var user = req.query.user;
    var passwd = req.query.passwd;

    if (user == null || passwd == null) {
        var result = {'status': false, 'msg': 'can\'t get access_key'};
        res.json(result);
        return;
    }

    request.post({url: 'https://api.kaaass.net/biliapi/login', form: {'user': user, 'passwd': passwd}}, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var result = JSON.parse(body);
            res.json(result);
        } 
    }); 
});

router.get('/history', function(req, res, next) {
    var access_key = req.query.access_key;
    var pn = req.query.pn;
    var ps = req.query.ps;

    if (access_key == null) {
        var result = {'status': false, 'msg': 'access_key can\'t be null'};
        res.json(result);
        return;
    }

    if (pn == null) {
        pn = 1;
    }

    if (ps == null) {
        ps = 30;
    }

    request(`http://api.bilibili.com/history?access_key=${access_key}&pn=${pn}&ps=${ps}`, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var result = JSON.parse(body);
            res.json(result);
        } 
    });
    
});

router.get('/m/:id', function(req, res, next) {
    var id = req.param('id');

    if (!isNaN(id)) {
        request.post({url: 'http://api.iimovie.cc/vodapi.html', form: {data: '{"Action":"GetMovieInfo","Message":{"MovieID":"'+ id +'"}}'}}, function(error, response, body) {
            if (!error && response.statusCode == 200) {

                var result = JSON.parse(body);
                var src = result.Message.CutPicName;
                
                request.get(src).pipe(res);
            }
        });
        
    }
});

router.get('/c/:id', function(req, res, next) {
    var id = req.param('id');

    if (!isNaN(id)) {
        request.post({url: 'http://api.iimovie.cc/vodapi.html', form: {data: '{"Action":"GetMovieInfo","Message":{"MovieID":"'+ id +'"}}'}}, function(error, response, body) {
            if (!error && response.statusCode == 200) {

                var result = JSON.parse(body);
                var src = result.Message.CoverImg;
                
                request.get(src).pipe(res);
            }
        });
        
    }
});

router.get('/:src', function(req, res, next) {
    var src = req.param('src');

    if (!src) {
        request.get(src).pipe(res);
    }
});
module.exports = router;
