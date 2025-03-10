/*
 * Copyright 1999-2021 Alibaba Group Holding Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.alibaba.chaosblade.box.dao.model;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * t_chaos_experiment
 * @author yefei
 */
@TableName("t_chaos_experiment")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ExperimentDO extends BaseDO {

    private String name;

    private String description;

    private Long taskId;

    private Integer duration;

    private String dimension;

    private String metric;

    @TableField(exist = false)
    private Integer lastTaskStatus;

    @TableField(exist = false)
    private Integer lastTaskResult;

    @TableLogic(value = "0", delval = "1")
    @TableField(value = "is_delete")
    private String isDelete;

}
