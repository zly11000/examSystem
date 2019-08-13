import Vue from "vue";
import { 
    Form,
    FormItem,
    Input,
    Button,
    Container,
    Message,
    Header,
    Aside,
    Main,
    Submenu,
    MenuItemGroup,
    Menu,
    MenuItem,
    Col,
    Row,
    Select,
    Option,
    MessageBox,
    Icon,
    Table,
    TableColumn,
    Pagination
} from "element-ui";
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Message)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Col)
Vue.use(Row)
Vue.use(Select)
Vue.use(Option)
Vue.use(Icon)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)




Vue.prototype.$message = Message
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$confirm = MessageBox.confirm;
