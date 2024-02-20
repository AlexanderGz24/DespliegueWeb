const { createApp } = Vue
const { createVuetify } = Vuetify


const app = Vue.createApp({
    data() {
        return {
            Mostartipo1: true,
            MostarLC3: false,

            prediccionTipo1: null,
            prediccionLC3: null,

            fields1: ['M325_(PR-VS)', 'Blaine_Aut', 'SiO2(RX-PA)', 'Al2O3(RX-PA)', 'Fe2O3(RX-PA)', 'CaO(RX-PA)', 'MgO(RX-PA)', 'SO3(RX-PA)', 'K2O(RX-PA)', 'Na2O(RX-PA)', 'C3Sc(RX-PA)', 'Alita', 'Calcite', 'C2Sc(RX-PA)', 'Belita', 'Fluid'],
            fields2: ['FVInil', 'FVFin', 'C3A(RX-PA)', 'C4AF(RX-PA)', 'C3ACubic', 'C3AOrtho', 'Gypsum', 'Insolu(QM-CA)', 'CO2(QM-CA)', 'PERD(QM-CA)', 'ChloriteIIb', 'Ferrita', '%Yes', '24hrs', '3dias', '7d'],

            fields3: ['CL', 'T_calcin', 'CL_Ss', 'time_calcin', 'CC', 'OPC', 'WB', 'T_cure', 'RH_cure', 'age_D', 'CaO_M', 'Al2O3_M', 'MgO_M', 'SiO2_M', 'Fe2O3_M', 'RM', 'SM', 'AM', 'HM', 'LM', 'FM', 'CL_SiO2', 'CL_Al2O3', 'CL_CaO'],
            fields4: ['CL_MgO', 'CL_K2O', 'CL_Na2O', 'CL_Fe2O3', 'CC_SiO2', 'CC_Al2O3', 'CC_CaO', 'CC_MgO', 'CC_K2O', 'CC_Na2O', 'CC_Fe2O3', 'OPC_SO3', 'OPC_SiO2'],

            /* Modelo Tipo1 */
            M325_PR_VS: '',
            Blaine_Aut: '',
            SiO2_RX_PA: '',
            Al2O3_RX_PA: '',
            Fe2O3_RX_PA: '',
            CaO_RX_PA: '',
            MgO_RX_PA: '',
            SO3_RX_PA: '',
            K2O_RX_PA: '',
            Na2O_RX_PA: '',
            C3Sc_RX_PA: '',
            Alita: '',
            Calcite: '',
            C2Sc_RX_PA: '',
            Belita: '',
            Fluid: '',
            FVInil: '',
            FVFin: '',
            C3A_RX_PA: '',
            C4AF_RX_PA: '',
            C3ACubic: '',
            C3AOrtho: '',
            Gypsum: '',
            InsoluQMCA: '',
            CO2QMCA: '',
            PERDQMCA: '',
            ChloriteIIb: '',
            Ferrita: '',
            Yes: '',
            veinticuatro_hrs: '',
            tres_dias: '',
            siete_d: '',

            /* ModeloLC3 */
            CL: '',
            T_calcin: '',
            CL_Ss: '',
            time_calcin: '',
            CC: '',
            OPC: '',
            WB: '',
            T_cure: '',
            RH_cure: '',
            age_D: '',
            CaO_M: '',
            Al2O3_M: '',
            MgO_M: '',
            SiO2_M: '',
            Fe2O3_M: '',
            RM: '',
            SM: '',
            AM: '',
            HM: '',
            LM: '',
            FM: '',
            CL_SiO2: '',
            CL_Al2O3: '',
            CL_CaO: '',
            CL_MgO: '',
            CL_K2O: '',
            CL_Na2O: '',
            CL_Fe2O3: '',
            CC_SiO2: '',
            CC_Al2O3: '',
            CC_CaO: '',
            CC_MgO: '',
            CC_K2O: '',
            CC_Na2O: '',
            CC_Fe2O3: '',
            OPC_SO3: '',
            OPC_SiO2: '',

        }
    },
    mounted() {

    },

    methods: {

        PredecirResistenciaTipo1() {
            this.SACargando()
            this.response = '';
            const url = 'http://127.0.0.1:5000/api/PredecirResistenciaTipo1/';

            // Construir objeto con los datos
            const data = {
                M325_PR_VS: this.M325_PR_VS,
                Blaine_Aut: this.Blaine_Aut,
                SiO2_RX_PA: this.SiO2_RX_PA,
                Al2O3_RX_PA: this.Al2O3_RX_PA,
                Fe2O3_RX_PA: this.Fe2O3_RX_PA,
                CaO_RX_PA: this.CaO_RX_PA,
                MgO_RX_PA: this.MgO_RX_PA,
                SO3_RX_PA: this.SO3_RX_PA,
                K2O_RX_PA: this.K2O_RX_PA,
                Na2O_RX_PA: this.Na2O_RX_PA,
                C3Sc_RX_PA: this.C3Sc_RX_PA,
                Alita: this.Alita,
                Calcite: this.Calcite,
                C2Sc_RX_PA: this.C2Sc_RX_PA,
                Belita: this.Belita,
                Fluid: this.Fluid,
                FVInil: this.FVInil,
                FVFin: this.FVFin,
                C3A_RX_PA: this.C3A_RX_PA,
                C4AF_RX_PA: this.C4AF_RX_PA,
                C3ACubic: this.C3ACubic,
                C3AOrtho: this.C3AOrtho,
                Gypsum: this.Gypsum,
                Insolu_QM_CA: this.InsoluQMCA,
                CO2_QM_CA: this.CO2QMCA,
                PERD_QM_CA: this.PERDQMCA,
                ChloriteIIb: this.ChloriteIIb,
                Ferrita: this.Ferrita,
                PercentYes: this.Yes,
                Hrs24: this.veinticuatro_hrs,
                Dias3: this.tres_dias,
                Dias7: this.siete_d
            };
            console.log(data)
            // Enviar solicitud POST a la URL
            axios.post(url, data)
                .then(response => {
                    console.log('Respuesta del servidor:', response.data.response);
                    this.prediccionTipo1 = response.data.response[0]
                    this.CloseAllSweetAlerts()
                })
                .catch(error => {
                    console.error('Error al enviar los datos:', error);
                });

        },
        PredecirResistenciaLC3() {
            this.SACargando()
            this.response = '';
            const url = 'http://127.0.0.1:5000/api/PredecirResistenciaLC3/';

            // Construir objeto con los datos
            const data = {
                CL: this.CL,
                T_calcin: this.T_calcin,
                CL_Ss: this.CL_Ss,
                time_calcin: this.time_calcin,
                CC: this.CC,
                OPC: this.OPC,
                WB: this.WB,
                T_cure: this.T_cure,
                RH_cure: this.RH_cure,
                age_D: this.age_D,
                CaO_M: this.CaO_M,
                Al2O3_M: this.Al2O3_M,
                MgO_M: this.MgO_M,
                SiO2_M: this.SiO2_M,
                Fe2O3_M: this.Fe2O3_M,
                RM: this.RM,
                SM: this.SM,
                AM: this.AM,
                HM: this.HM,
                LM: this.LM,
                FM: this.FM,
                CL_SiO2: this.CL_SiO2,
                CL_Al2O3: this.CL_Al2O3,
                CL_CaO: this.CL_CaO,
                CL_MgO: this.CL_MgO,
                CL_K2O: this.CL_K2O,
                CL_Na2O: this.CL_Na2O,
                CL_Fe2O3: this.CL_Fe2O3,
                CC_SiO2: this.CC_SiO2,
                CC_Al2O3: this.CC_Al2O3,
                CC_CaO: this.CC_CaO,
                CC_MgO: this.CC_MgO,
                CC_K2O: this.CC_K2O,
                CC_Na2O: this.CC_Na2O,
                CC_Fe2O3: this.CC_Fe2O3,
                OPC_SO3: this.OPC_SO3,
                OPC_SiO2: this.OPC_SiO2,

            };
            console.log(data)
            // Enviar solicitud POST a la URL
            axios.post(url, data)
                .then(response => {
                    console.log('Respuesta del servidor:', response.data.response);
                    this.prediccionLC3 = response.data.response[0]
                    this.CloseAllSweetAlerts()
                })
                .catch(error => {
                    console.error('Error al enviar los datos:', error);
                });

        },
        mostrarTipo1() {
            this.NoMostrarNada()
            this.Mostartipo1 = true
        },
        mostrarLC3() {
            this.NoMostrarNada()
            this.MostarLC3 = true
        },
        NoMostrarNada() {
            this.Mostartipo1 = false
            this.MostarLC3 = false
        },

        /* SA: Sweet Alert2 */
        SACargando() {

            /* Swal.fire('Por favor escriba una pregunta'); */
            Swal.fire({
                title: 'Cargando',
                didOpen: () => {
                    Swal.showLoading()
                },
                allowOutsideClick: false,
            })
        },


        CloseAllSweetAlerts() {
            Swal.close({})
        }
    }
})

const vuetify = createVuetify(
    {
        /*         theme: {
                    defaultTheme: 'dark'
                } */
    }
)

app.use(vuetify).mount('#app')
