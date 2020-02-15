<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: recharge.proto

namespace Recharge;

use Google\Protobuf\Internal\DescriptorPool;
use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

class ShoppingListRequest extends \Google\Protobuf\Internal\Message
{
    private $system_type = 0;
    private $app_id = 0;

    public function getSystemType()
    {
        return $this->system_type;
    }

    public function setSystemType($var)
    {
        GPBUtil::checkUint32($var);
        $this->system_type = $var;
    }

    public function getAppId()
    {
        return $this->app_id;
    }

    public function setAppId($var)
    {
        GPBUtil::checkUint32($var);
        $this->app_id = $var;
    }

}

class ShoppingItemData extends \Google\Protobuf\Internal\Message
{
    private $amount = 0.0;
    private $gold_0 = 0;
    private $gold_1 = 0;
    private $gold = 0;

    public function getAmount()
    {
        return $this->amount;
    }

    public function setAmount($var)
    {
        GPBUtil::checkFloat($var);
        $this->amount = $var;
    }

    public function getGold0()
    {
        return $this->gold_0;
    }

    public function setGold0($var)
    {
        GPBUtil::checkUint32($var);
        $this->gold_0 = $var;
    }

    public function getGold1()
    {
        return $this->gold_1;
    }

    public function setGold1($var)
    {
        GPBUtil::checkUint32($var);
        $this->gold_1 = $var;
    }

    public function getGold()
    {
        return $this->gold;
    }

    public function setGold($var)
    {
        GPBUtil::checkUint32($var);
        $this->gold = $var;
    }

}

class ShoppingItem extends \Google\Protobuf\Internal\Message
{
    private $name = '';
    private $item_data;

    public function getName()
    {
        return $this->name;
    }

    public function setName($var)
    {
        GPBUtil::checkString($var, True);
        $this->name = $var;
    }

    public function getItemData()
    {
        return $this->item_data;
    }

    public function setItemData(&$var)
    {
        GPBUtil::checkRepeatedField($var, GPBType::MESSAGE, \Recharge\ShoppingItemData::class);
        $this->item_data = $var;
    }

}

class ShoppingListResponse extends \Google\Protobuf\Internal\Message
{
    private $code = 0;
    private $shopping_item;

    public function getCode()
    {
        return $this->code;
    }

    public function setCode($var)
    {
        GPBUtil::checkUint32($var);
        $this->code = $var;
    }

    public function getShoppingItem()
    {
        return $this->shopping_item;
    }

    public function setShoppingItem(&$var)
    {
        GPBUtil::checkRepeatedField($var, GPBType::MESSAGE, \Recharge\ShoppingItem::class);
        $this->shopping_item = $var;
    }

}

class PayWechatVersionRequest extends \Google\Protobuf\Internal\Message
{
    private $amount = 0.0;
    private $pf_id = 0;
    private $uid = '';
    private $app_id = 0;

    public function getAmount()
    {
        return $this->amount;
    }

    public function setAmount($var)
    {
        GPBUtil::checkFloat($var);
        $this->amount = $var;
    }

    public function getPfId()
    {
        return $this->pf_id;
    }

    public function setPfId($var)
    {
        GPBUtil::checkInt32($var);
        $this->pf_id = $var;
    }

    public function getUid()
    {
        return $this->uid;
    }

    public function setUid($var)
    {
        GPBUtil::checkString($var, True);
        $this->uid = $var;
    }

    public function getAppId()
    {
        return $this->app_id;
    }

    public function setAppId($var)
    {
        GPBUtil::checkUint32($var);
        $this->app_id = $var;
    }

}

class PayResponse extends \Google\Protobuf\Internal\Message
{
    private $code = 0;
    private $result = '';
    private $pay_type = 0;

    public function getCode()
    {
        return $this->code;
    }

    public function setCode($var)
    {
        GPBUtil::checkUint32($var);
        $this->code = $var;
    }

    public function getResult()
    {
        return $this->result;
    }

    public function setResult($var)
    {
        GPBUtil::checkString($var, True);
        $this->result = $var;
    }

    public function getPayType()
    {
        return $this->pay_type;
    }

    public function setPayType($var)
    {
        GPBUtil::checkUint32($var);
        $this->pay_type = $var;
    }

}

class PayWechatVersionResponse extends \Google\Protobuf\Internal\Message
{
    private $code = 0;
    private $result = '';

    public function getCode()
    {
        return $this->code;
    }

    public function setCode($var)
    {
        GPBUtil::checkUint32($var);
        $this->code = $var;
    }

    public function getResult()
    {
        return $this->result;
    }

    public function setResult($var)
    {
        GPBUtil::checkString($var, True);
        $this->result = $var;
    }

}

class AlipayVersionRequest extends \Google\Protobuf\Internal\Message
{
    private $amount = 0.0;
    private $pf_id = 0;
    private $uid = '';
    private $app_id = 0;

    public function getAmount()
    {
        return $this->amount;
    }

    public function setAmount($var)
    {
        GPBUtil::checkFloat($var);
        $this->amount = $var;
    }

    public function getPfId()
    {
        return $this->pf_id;
    }

    public function setPfId($var)
    {
        GPBUtil::checkInt32($var);
        $this->pf_id = $var;
    }

    public function getUid()
    {
        return $this->uid;
    }

    public function setUid($var)
    {
        GPBUtil::checkString($var, True);
        $this->uid = $var;
    }

    public function getAppId()
    {
        return $this->app_id;
    }

    public function setAppId($var)
    {
        GPBUtil::checkUint32($var);
        $this->app_id = $var;
    }

}

class AlipayVersionResponse extends \Google\Protobuf\Internal\Message
{
    private $code = 0;
    private $alipay_req = '';

    public function getCode()
    {
        return $this->code;
    }

    public function setCode($var)
    {
        GPBUtil::checkUint32($var);
        $this->code = $var;
    }

    public function getAlipayReq()
    {
        return $this->alipay_req;
    }

    public function setAlipayReq($var)
    {
        GPBUtil::checkString($var, True);
        $this->alipay_req = $var;
    }

}

class IOSAlipayVersionResponse extends \Google\Protobuf\Internal\Message
{
    private $code = 0;
    private $order_number = '';
    private $goods_name = '';
    private $details = '';
    private $price = 0.0;
    private $callback = '';

    public function getCode()
    {
        return $this->code;
    }

    public function setCode($var)
    {
        GPBUtil::checkUint32($var);
        $this->code = $var;
    }

    public function getOrderNumber()
    {
        return $this->order_number;
    }

    public function setOrderNumber($var)
    {
        GPBUtil::checkString($var, True);
        $this->order_number = $var;
    }

    public function getGoodsName()
    {
        return $this->goods_name;
    }

    public function setGoodsName($var)
    {
        GPBUtil::checkString($var, True);
        $this->goods_name = $var;
    }

    public function getDetails()
    {
        return $this->details;
    }

    public function setDetails($var)
    {
        GPBUtil::checkString($var, True);
        $this->details = $var;
    }

    public function getPrice()
    {
        return $this->price;
    }

    public function setPrice($var)
    {
        GPBUtil::checkFloat($var);
        $this->price = $var;
    }

    public function getCallback()
    {
        return $this->callback;
    }

    public function setCallback($var)
    {
        GPBUtil::checkString($var, True);
        $this->callback = $var;
    }

}

class WanbaPayRequest extends \Google\Protobuf\Internal\Message
{
    private $uid = '';
    private $open_id = '';
    private $zone_id = 0;
    private $app_id = 0;
    private $good_id = 0;

    public function getUid()
    {
        return $this->uid;
    }

    public function setUid($var)
    {
        GPBUtil::checkString($var, True);
        $this->uid = $var;
    }

    public function getOpenId()
    {
        return $this->open_id;
    }

    public function setOpenId($var)
    {
        GPBUtil::checkString($var, True);
        $this->open_id = $var;
    }

    public function getZoneId()
    {
        return $this->zone_id;
    }

    public function setZoneId($var)
    {
        GPBUtil::checkInt32($var);
        $this->zone_id = $var;
    }

    public function getAppId()
    {
        return $this->app_id;
    }

    public function setAppId($var)
    {
        GPBUtil::checkUint32($var);
        $this->app_id = $var;
    }

    public function getGoodId()
    {
        return $this->good_id;
    }

    public function setGoodId($var)
    {
        GPBUtil::checkUint32($var);
        $this->good_id = $var;
    }

}

class WanbaPayResponse extends \Google\Protobuf\Internal\Message
{
    private $code = 0;
    private $result = '';

    public function getCode()
    {
        return $this->code;
    }

    public function setCode($var)
    {
        GPBUtil::checkUint32($var);
        $this->code = $var;
    }

    public function getResult()
    {
        return $this->result;
    }

    public function setResult($var)
    {
        GPBUtil::checkString($var, True);
        $this->result = $var;
    }

}

class PayHeartbeatRequest extends \Google\Protobuf\Internal\Message
{
    private $order_number = '';

    public function getOrderNumber()
    {
        return $this->order_number;
    }

    public function setOrderNumber($var)
    {
        GPBUtil::checkString($var, True);
        $this->order_number = $var;
    }

}

class PayHeartbeatResponse extends \Google\Protobuf\Internal\Message
{
    private $status = '';

    public function getStatus()
    {
        return $this->status;
    }

    public function setStatus($var)
    {
        GPBUtil::checkString($var, True);
        $this->status = $var;
    }

}

class BindIdRequest extends \Google\Protobuf\Internal\Message
{
    private $aid = 0;
    private $user_id = '';
    private $app_id = 0;

    public function getAid()
    {
        return $this->aid;
    }

    public function setAid($var)
    {
        GPBUtil::checkUint32($var);
        $this->aid = $var;
    }

    public function getUserId()
    {
        return $this->user_id;
    }

    public function setUserId($var)
    {
        GPBUtil::checkString($var, True);
        $this->user_id = $var;
    }

    public function getAppId()
    {
        return $this->app_id;
    }

    public function setAppId($var)
    {
        GPBUtil::checkUint32($var);
        $this->app_id = $var;
    }

}

class BindIdResponse extends \Google\Protobuf\Internal\Message
{
    private $code = 0;
    private $agent_id = 0;
    private $gift_gold = 0.0;

    public function getCode()
    {
        return $this->code;
    }

    public function setCode($var)
    {
        GPBUtil::checkUint32($var);
        $this->code = $var;
    }

    public function getAgentId()
    {
        return $this->agent_id;
    }

    public function setAgentId($var)
    {
        GPBUtil::checkUint32($var);
        $this->agent_id = $var;
    }

    public function getGiftGold()
    {
        return $this->gift_gold;
    }

    public function setGiftGold($var)
    {
        GPBUtil::checkFloat($var);
        $this->gift_gold = $var;
    }

}

$pool = DescriptorPool::getGeneratedPool();

$pool->internalAddGeneratedFile(hex2bin(
    "0aa6090a0e72656368617267652e70726f746f1208726563686172676522" .
    "3a0a1353686f7070696e674c6973745265717565737412130a0b73797374" .
    "656d5f7479706518012001280d120e0a066170705f696418022001280d22" .
    "500a1053686f7070696e674974656d44617461120e0a06616d6f756e7418" .
    "0120012802120e0a06676f6c645f3018022001280d120e0a06676f6c645f" .
    "3118032001280d120c0a04676f6c6418042001280d224b0a0c53686f7070" .
    "696e674974656d120c0a046e616d65180120012809122d0a096974656d5f" .
    "6461746118022003280b321a2e72656368617267652e53686f7070696e67" .
    "4974656d4461746122530a1453686f7070696e674c697374526573706f6e" .
    "7365120c0a04636f646518012001280d122d0a0d73686f7070696e675f69" .
    "74656d18022003280b32162e72656368617267652e53686f7070696e6749" .
    "74656d22550a1750617957656368617456657273696f6e52657175657374" .
    "120e0a06616d6f756e74180120012802120d0a0570665f69641802200128" .
    "05120b0a03756964180320012809120e0a066170705f696418042001280d" .
    "223d0a0b506179526573706f6e7365120c0a04636f646518012001280d12" .
    "0e0a06726573756c7418022001280912100a087061795f74797065180320" .
    "01280d22380a1850617957656368617456657273696f6e526573706f6e73" .
    "65120c0a04636f646518012001280d120e0a06726573756c741802200128" .
    "0922520a14416c6970617956657273696f6e52657175657374120e0a0661" .
    "6d6f756e74180120012802120d0a0570665f6964180220012805120b0a03" .
    "756964180320012809120e0a066170705f696418042001280d22390a1541" .
    "6c6970617956657273696f6e526573706f6e7365120c0a04636f64651801" .
    "2001280d12120a0a616c697061795f7265711802200128092284010a1849" .
    "4f53416c6970617956657273696f6e526573706f6e7365120c0a04636f64" .
    "6518012001280d12140a0c6f726465725f6e756d62657218022001280912" .
    "120a0a676f6f64735f6e616d65180320012809120f0a0764657461696c73" .
    "180420012809120d0a05707269636518052001280212100a0863616c6c62" .
    "61636b18062001280922610a0f57616e626150617952657175657374120b" .
    "0a03756964180120012809120f0a076f70656e5f6964180220012809120f" .
    "0a077a6f6e655f6964180320012805120e0a066170705f69641804200128" .
    "0d120f0a07676f6f645f696418052001280d22300a1057616e6261506179" .
    "526573706f6e7365120c0a04636f646518012001280d120e0a0672657375" .
    "6c74180220012809222b0a13506179486561727462656174526571756573" .
    "7412140a0c6f726465725f6e756d62657218012001280922260a14506179" .
    "486561727462656174526573706f6e7365120e0a06737461747573180120" .
    "012809223d0a0d42696e64496452657175657374120b0a03616964180120" .
    "01280d120f0a07757365725f6964180220012809120e0a066170705f6964" .
    "18032001280d22430a0e42696e644964526573706f6e7365120c0a04636f" .
    "646518012001280d12100a086167656e745f696418022001280d12110a09" .
    "676966745f676f6c64180320012802620670726f746f33"
));

