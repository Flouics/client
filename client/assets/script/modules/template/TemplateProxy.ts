
import App from "../../App";
import BaseProxy from "../base/Proxy";
import TemplateCommand from "./TemplateCommand";
/*

 */
export default class TemplateProxy extends BaseProxy {
    cmd:TemplateCommand;
};

export function getTemplateProxy(): TemplateProxy {
    return TemplateProxy._instance;
}