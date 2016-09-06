package com.logicide.AdeptEnergyWidget;

/**
 * Created by jjenkins on 7/5/2016.
 */

import javax.baja.naming.BOrd;
import javax.baja.nre.annotations.AgentOn;
import javax.baja.nre.annotations.NiagaraType;
import javax.baja.sys.BSingleton;
import javax.baja.sys.Context;
import javax.baja.sys.Sys;
import javax.baja.sys.Type;
import javax.baja.web.BIFormFactorMax;
import javax.baja.web.js.BIJavaScript;
import javax.baja.web.js.JsInfo;

@NiagaraType(agent=@AgentOn(types={"AdeptEnergy:EnergyTracker"}))
public final class BAdeptEnergyWidget
        extends BSingleton
        implements BIJavaScript, BIFormFactorMax {
    private BAdeptEnergyWidget() {
    }

    public static final BAdeptEnergyWidget INSTANCE = new BAdeptEnergyWidget();

    @Override
    public Type getType() {
        return TYPE;
    }

    public static final Type TYPE = Sys.loadType(BAdeptEnergyWidget.class);

    //test
    public JsInfo getJsInfo(Context cx) {
        return jsInfo;
    }

    private static final JsInfo jsInfo = JsInfo.make(BOrd.make("module://AdeptEnergyWidget/rc/AdeptEnergyWidget.js"));
}