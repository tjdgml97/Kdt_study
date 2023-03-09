app.use(express.static('public'));

// 백엔드 - 현재경로에서 작성하면된다
const userRouter = require('./routes/users');

const app = express();
const userRouter = express.Router();

const PORT = 4000;
