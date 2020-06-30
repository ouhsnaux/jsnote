## iview radio-group

<Radio-group v-model="phone" @on-change="changePhone" ref="raidogroup">
            <Radio label="apple">
                <Icon type="social-apple"></Icon>
                <span>Apple</span>
            </Radio>
            <Radio label="android">
                <Icon type="social-android"></Icon>
                <span>Android</span>
            </Radio>
            <Radio label="windows">
                <Icon type="social-windows"></Icon>
                <span>Windows</span>
            </Radio>
        </Radio-group>

        <script>
    export default {
        data () {
            return {
                single: true,
                phone: '',
                button2: '北京',
            };
        },
        methods: {
            changePhone(phone) {
                this.phone = 'apple';
                this.$refs.raidogroup.currentValue = 'apple';
                this.$nextTick(()=>{
                    this.$refs.raidogroup.updateValue();
                });
            }
        }
    };
</script>