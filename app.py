
from flask import Flask, jsonify, request, send_file, Response

from flask_cors import CORS
import joblib
import os
import io
import json


#inicio
app = Flask(__name__)
print('==')
CORS(app)
print('==')


@app.route('/api/PredecirResistenciaTipo1/', methods=['POST']) #Chatear con el Agente y el PDF que se seleccionó
def PredecirResistenciaTipo1():

    #data = request.json
    
    # Acceder a los campos específicos de los datos
    m325 = float(request.json['M325_PR_VS'])
    blaine_aut = float(request.json['Blaine_Aut'])
    sio2_rx_pa = float(request.json['SiO2_RX_PA'])
    al2o3_rx_pa = float(request.json['Al2O3_RX_PA'])
    fe2o3_rx_pa = float(request.json['Fe2O3_RX_PA'])
    cao_rx_pa = float(request.json['CaO_RX_PA'])
    mgo_rx_pa = float(request.json['MgO_RX_PA'])
    so3_rx_pa = float(request.json['SO3_RX_PA'])
    k2o_rx_pa = float(request.json['K2O_RX_PA'])
    na2o_rx_pa = float(request.json['Na2O_RX_PA'])
    c3sc_rx_pa = float(request.json['C3Sc_RX_PA'])
    alita = float(request.json['Alita'])
    calcite = float(request.json['Calcite'])
    c2sc_rx_pa = float(request.json['C2Sc_RX_PA'])
    belita = float(request.json['Belita'])
    fluid = float(request.json['Fluid'])
    fvinil = float(request.json['FVInil'])
    fvfin = float(request.json['FVFin'])
    c3a_rx_pa = float(request.json['C3A_RX_PA'])
    c4af_rx_pa = float(request.json['C4AF_RX_PA'])
    c3acubic = float(request.json['C3ACubic'])
    c3aortho = float(request.json['C3AOrtho'])
    gypsum = float(request.json['Gypsum'])
    insolu_qm_ca = float(request.json['Insolu_QM_CA'])
    co2_qm_ca = float(request.json['CO2_QM_CA'])
    perd_qm_ca = float(request.json['PERD_QM_CA'])
    chloriteii_b = float(request.json['ChloriteIIb'])
    ferrita = float(request.json['Ferrita'])
    percent_yes = float(request.json['PercentYes'])
    hrs24 = float(request.json['Hrs24'])
    dias3 = float(request.json['Dias3'])
    dias7 = float(request.json['Dias7'])

    input_data = [[m325, blaine_aut, sio2_rx_pa, al2o3_rx_pa, fe2o3_rx_pa, cao_rx_pa, mgo_rx_pa, so3_rx_pa, k2o_rx_pa, na2o_rx_pa,
                   c3sc_rx_pa, alita, calcite, c2sc_rx_pa, belita, fluid, fvinil, fvfin, c3a_rx_pa, c4af_rx_pa, c3acubic, c3aortho,
                   gypsum, insolu_qm_ca, co2_qm_ca, perd_qm_ca, chloriteii_b, ferrita, percent_yes, hrs24, dias3, dias7]]

    print(input_data)

    ruta_modelo_pkl = 'D:\ML_UNI\ML_PrediccionResistenciaCemento\DespliegueWeb\models\modelo_tipo1.pkl'
    modelo_tipo1 = joblib.load(ruta_modelo_pkl)

    prediction = modelo_tipo1.predict(input_data).tolist()  # Convertir a lista


    print('prediction')
    response=prediction
    return jsonify({'message': 'Predicción llevada a cabo correctamente', 'response': response})



@app.route('/api/PredecirResistenciaLC3/', methods=['POST']) #Chatear con el Agente y el PDF que se seleccionó
def PredecirResistenciaLC3():

    #data = request.json
    
    # Acceder a los campos específicos de los datos
    
    CL= float(request.json['CL'])
    T_calcin= float(request.json['T_calcin'])
    CL_Ss= float(request.json['CL_Ss'])
    time_calcin= float(request.json['time_calcin'])
    CC= float(request.json['CC'])
    OPC= float(request.json['OPC'])
    WB= float(request.json['WB'])
    T_cure= float(request.json['T_cure'])
    RH_cure= float(request.json['RH_cure'])
    age_D= float(request.json['age_D'])
    CaO_M= float(request.json['CaO_M'])
    Al2O3_M= float(request.json['Al2O3_M'])
    MgO_M= float(request.json['MgO_M'])
    SiO2_M= float(request.json['SiO2_M'])
    Fe2O3_M= float(request.json['Fe2O3_M'])
    RM= float(request.json['RM'])
    SM= float(request.json['SM'])
    AM= float(request.json['AM'])
    HM= float(request.json['HM'])
    LM= float(request.json['LM'])
    FM= float(request.json['FM'])
    CL_SiO2= float(request.json['CL_SiO2'])
    CL_Al2O3= float(request.json['CL_Al2O3'])
    CL_CaO= float(request.json['CL_CaO'])
    CL_MgO= float(request.json['CL_MgO'])
    CL_K2O= float(request.json['CL_K2O'])
    CL_Na2O= float(request.json['CL_Na2O'])
    CL_Fe2O3= float(request.json['CL_Fe2O3'])
    CC_SiO2= float(request.json['CC_SiO2'])
    CC_Al2O3= float(request.json['CC_Al2O3'])
    CC_CaO= float(request.json['CC_CaO'])
    CC_MgO= float(request.json['CC_MgO'])
    CC_K2O= float(request.json['CC_K2O'])
    CC_Na2O= float(request.json['CC_Na2O'])
    CC_Fe2O3= float(request.json['CC_Fe2O3'])
    OPC_SO3= float(request.json['OPC_SO3'])
    OPC_SiO2= float(request.json['OPC_SiO2'])

    input_data = [[CL, T_calcin, CL_Ss, time_calcin, CC, OPC, WB, T_cure, RH_cure, age_D, CaO_M, Al2O3_M, MgO_M, SiO2_M, Fe2O3_M, RM, SM, AM, HM, LM, FM, CL_SiO2, CL_Al2O3, CL_CaO, CL_MgO, CL_K2O, CL_Na2O, CL_Fe2O3, CC_SiO2, CC_Al2O3, CC_CaO, CC_MgO, CC_K2O, CC_Na2O, CC_Fe2O3, OPC_SO3, OPC_SiO2]]
    print(input_data)

    ruta_modelo_pkl = 'D:\ML_UNI\ML_PrediccionResistenciaCemento\DespliegueWeb\models\modelo_LC3.pkl'
    modelo_LC3 = joblib.load(ruta_modelo_pkl)

    prediction = modelo_LC3.predict(input_data).tolist()  # Convertir a lista


    print('prediction')
    response=prediction
    return jsonify({'message': 'Predicción llevada a cabo correctamente', 'response': response})



if __name__ == '__main__':
    app.run(debug=True)
