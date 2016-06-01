'use strict';

import {Router} from 'express';
import * as controller from './tvepisode.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.get('/', controller.index);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', controller.create);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
// router.get('/me', auth.isAuthenticated(), controller.me);
router.put('/:id/seen', auth.isAuthenticated(), controller.update);
// router.patch('/:id/url', auth.isAuthenticated(), controller.update);

module.exports = router;
